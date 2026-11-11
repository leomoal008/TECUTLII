// ============================================
// SIDC MODEL - MODIFICADO: SIN VALOR POR DEFECTO
// ============================================
const SIDCModel = (() => {
  let value = ""; // Cambiado: ya no tiene valor por defecto
  moverVisualizadorASlotActivo();

  function isValid(sidc) {
    return /^[0-9]{30}$/.test(sidc);
  }

  function get() {
    return value;
  }

  function set(newSIDC) {
    if (isValid(newSIDC)) {
      value = newSIDC;
      return true;
    }
    return false;
  }

  function setDigit(pos, digit) {
    if (!value || !isValid(value)) return;
    const arr = value.split("");
    arr[pos] = digit;
    value = arr.join("");
  }

  function setTwoDigits(pos, twoDigits) {
    if (!value || !isValid(value) || twoDigits.length !== 2) return;
    const arr = value.split("");
    arr[pos] = twoDigits[0];
    arr[pos + 1] = twoDigits[1];
    value = arr.join("");
  }

  function setIcon(iconCode) {
    if (!value || !isValid(value) || iconCode.length !== 6) return;
    const arr = value.split("");
    for (let i = 0; i < 6; i++) {
      arr[10 + i] = iconCode[i];
    }
    value = arr.join("");
  }

  function read(pos, len = 1) {
    if (!value) return "";
    return value.substring(pos, pos + len);
  }

  return {
    get,
    set,
    setDigit,
    setTwoDigits,
    setIcon,
    read,
    isValid
  };
})();

// ============================================
// SYMBOL CONTROLLER - MODIFICADO: Maneja caso sin SIDC
// ============================================
const SymbolController = (() => {
  const options = {
    frame: true,
    padding: 20
  };

  const container = document.getElementById("resultado");

  function updateOption(key, value) {
    if (value && value !== "" && value !== "none") {
      options[key] = value;
    } else {
      delete options[key];
    }
  }

  function render() {
    const sidc = SIDCModel.get();
    
    // Si no hay SIDC válido, mostrar mensaje o nada
    if (!sidc || !SIDCModel.isValid(sidc)) {
      container.innerHTML = '<div class="no-symbol">Selecciona un símbolo</div>';
      return;
    }

    try {
      container.classList.remove("fade-in", "fade-out");
      void container.offsetWidth;
      container.classList.add("fade-out");

      setTimeout(() => {
        const symbol = new ms.Symbol(sidc, options);
        container.innerHTML = symbol.asSVG();
        container.classList.remove("fade-out");
        container.classList.add("fade-in");
      }, 150);

    } catch (e) {
      console.error(e);
      container.innerHTML = '<div class="no-symbol">Error al generar símbolo</div>';
    }
  }

  return {
    render,
    updateOption
  };
})();

// ============================================
// FUNCIÓN PARA LEER PARÁMETROS DE LA URL
// ============================================
function loadFromURL() {
  console.log("=== CARGANDO DESDE URL ===");
  console.log("URL:", window.location.href);
  
  const params = new URLSearchParams(window.location.search);
  
  const sidc = params.get("sidc");
  const ampT = params.get("ampT");
  const ampH = params.get("ampH");
  
  console.log("Datos de URL:", { sidc, ampT, ampH });
  
  return { sidc, ampT, ampH };
}

// ============================================
// UI CONTROLLER - MODIFICADO: Sin valores por defecto
// ============================================
const UIController = (() => {
  const sidcInput = document.getElementById("sidc-input");

  function bindSelect(id, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", e => callback(e.target.value));
  }

  function bindInput(id, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", e => callback(e.target.value));
  }

  function syncSIDCToUI() {
    sidcInput.value = SIDCModel.get();
  }

  function syncUIFromSIDC() {
    const sidc = SIDCModel.get();
    if (!sidc) return;
    
    setSelect("context", SIDCModel.read(2));
    setSelect("identity", SIDCModel.read(3));

    const echelon = SIDCModel.read(8, 2);
    if (document.querySelector(`#escalon option[value="${echelon}"]`)) {
      setSelect("escalon", echelon);
      setSelect("amp-r", "");
    } else {
      setSelect("amp-r", echelon);
      setSelect("escalon", "");
    }

    setSelect("icon-selector", SIDCModel.read(10, 6));
  }

  function setSelect(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = el.querySelector(`option[value="${value}"]`) ? value : "";
  }

  function applyURLData(urlData) {
    const { sidc, ampT, ampH } = urlData;
    
    if (!sidc || !SIDCModel.isValid(sidc)) {
      console.warn("SIDC no válido o no proporcionado en URL");
      return false;
    }
    
    // Establecer SIDC en el modelo
    SIDCModel.set(sidc);
    
    // ============================================
    // 1. ACTUALIZAR INPUT SIDC
    // ============================================
    if (sidcInput) sidcInput.value = sidc;
    
    // ============================================
    // 2. CONTEXTO (POSICIÓN 2)
    // ============================================
    const contextSelect = document.getElementById("context");
    if (contextSelect) {
      const contextValue = sidc[2];
      if ([...contextSelect.options].some(opt => opt.value === contextValue)) {
        contextSelect.value = contextValue;
        console.log("Contexto actualizado a:", contextValue);
      }
    }
    
    // ============================================
    // 3. AFILIACIÓN (POSICIÓN 3)
    // ============================================
    const identitySelect = document.getElementById("identity");
    if (identitySelect) {
      const identityValue = sidc[3];
      if ([...identitySelect.options].some(opt => opt.value === identityValue)) {
        identitySelect.value = identityValue;
        console.log("Afiliación actualizada a:", identityValue);
      }
    }
    
    // ============================================
    // 4. CONJUNTO DE SÍMBOLOS (POSICIONES 4 y 5)
    // ============================================
    const symbolSet = sidc.substring(4, 6);
    const tabId = `tab-${symbolSet}`;
    const tabButton = document.querySelector(`.tab[data-tab="${tabId}"]`);
    const tabContent = document.getElementById(tabId);
    
    if (tabButton && tabContent) {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      
      tabButton.classList.add("active");
      tabContent.classList.add("active");
      console.log("Pestaña activada:", tabId);
    } else {
      console.warn("No se encontró pestaña para el código:", symbolSet);
    }
    
    // ============================================
    // 5. INDICADOR HQ (POSICIÓN 7)
    // ============================================
    const hqSelect = document.getElementById("hq");
    if (hqSelect) {
      const hqValue = sidc[7];
      if ([...hqSelect.options].some(opt => opt.value === hqValue)) {
        hqSelect.value = hqValue;
        console.log("HQ actualizado a:", hqValue);
      }
    }
    
    // ============================================
    // 6. AMPLIFICADORES T y H
    // ============================================
    const inputT = document.querySelector('[data-amp="t"]');
    const inputH = document.querySelector('[data-amp="h"]');
    
    if (inputT && ampT) {
      inputT.value = ampT;
      SymbolController.updateOption("uniqueDesignation", ampT);
      console.log("ampT aplicado:", ampT);
    }
    
    if (inputH && ampH) {
      inputH.value = ampH;
      SymbolController.updateOption("additionalInformation", ampH);
      console.log("ampH aplicado:", ampH);
    }
    
    return true;
  }

  function init() {
    bindAmplifiers();

    // =========================
    // PRIMERO: CARGAR DATOS DE LA URL
    // =========================
    const urlData = loadFromURL();
    const urlApplied = applyURLData(urlData);
    
    if (!urlApplied) {
      console.log("No hay datos en URL, todo vacío");
    }

    function setSymbolSetFromTab(tabId) {
      const match = tabId.match(/tab-(\d{2})/);
      if (!match) return;
      const setCode = match[1];
      SIDCModel.setTwoDigits(4, setCode);
      bindAmplifiers();
      syncSIDCToUI();
      SymbolController.render();
    }

    // SIDC manual
    sidcInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const newSIDC = sidcInput.value.trim();
        if (SIDCModel.set(newSIDC)) {
          syncUIFromSIDC();
          SymbolController.render();
        } else {
          alert("SIDC inválido (debe tener 30 dígitos)");
        }
      }
    });

    // CONTEXTO
    bindSelect("context", v => {
      SIDCModel.setDigit(2, v);
      syncSIDCToUI();
      SymbolController.render();
    });

    // IDENTIDAD
    bindSelect("identity", v => {
      SIDCModel.setDigit(3, v);
      syncSIDCToUI();
      SymbolController.render();
    });

    // ICONO
    bindSelect("icon-selector", v => {
      SIDCModel.setIcon(v);
      syncSIDCToUI();
      SymbolController.render();
    });

    // MODIFICADOR 1
    bindSelect("modifier-1", v => {
      const activeTab = document.querySelector(".tab-content.active");
      const el = document.getElementById("modifier-1");
      if (!activeTab || !activeTab.contains(el)) return;
      updateModifier1(v);
    });

    // MODIFICADOR 2
    bindSelect("modifier-2", v => {
      const activeTab = document.querySelector(".tab-content.active");
      const el = document.getElementById("modifier-2");
      if (!activeTab || !activeTab.contains(el)) return;
      updateModifier2(v);
    });

    // J — CALIFICACIÓN DE LA EVALUACIÓN
    bindInput("amp-j-source", updateJ);
    bindInput("amp-j-cred", updateJ);

    function updateJ() {
      const s = document.getElementById("amp-j-source")?.value || "";
      const c = document.getElementById("amp-j-cred")?.value || "";
      SymbolController.updateOption(
        "evaluationRating",
        (s && c) ? (s + c).toUpperCase() : null
      );
      SymbolController.render();
    }

    // F — REFORZADO / REDUCIDO
    bindSelect("amp-f", v => {
      SymbolController.updateOption("reinforcedReduced", v === "none" || v === "" ? null : v);
      SymbolController.render();
    });

    // K — EFICACIA DEL COMBATE
    bindSelect("amp-k", v => {
      SymbolController.updateOption("combatEffectiveness", v === "none" || v === "" ? null : v);
      SymbolController.render();
    });

    document.querySelectorAll("input, select").forEach(el => {
      el.addEventListener("change", SymbolController.render);
      el.addEventListener("input", SymbolController.render);
    });

    // =========================
    // VISUALIZADOR
    // =========================
    const btnVis = document.getElementById("btn-visualizador");
    const modal = document.getElementById("visualizador-modal");
    const modalImg = document.getElementById("modal-img");
    const previewImg = document.getElementById("preview-img");
    const closeBtn = document.getElementById("visualizador-close");

    const visualizadorImgs = {
      "tab-00": "img/default.png",
      "tab-01": "img/aire.png",
      "tab-02": "img/aire-misil.png",
      "tab-05": "img/espacio.png",
      "tab-06": "img/espacio-misil.png",
      "tab-10": "img/unidad de tierra.png",
      default: "img/default.png"
    };

    function setVisualizador(tab) {
      const img = visualizadorImgs[tab] || visualizadorImgs.default;
      if (previewImg) previewImg.src = img;
      if (modalImg) modalImg.src = img;
    }

    document.querySelectorAll(".tab").forEach(tabBtn => {
      tabBtn.addEventListener("click", () => {
        const tabId = tabBtn.dataset.tab;

        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tabBtn.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        const content = document.getElementById(tabId);
        if (content) content.classList.add("active");

        resetearFormulario();

        setVisualizador(tabId);
        setSymbolSetFromTab(tabId);

        syncSIDCToUI();
        SymbolController.render();
        moverVisualizadorASlotActivo();

        tabBtn.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      });
    });

    btnVis?.addEventListener("click", () => modal.style.display = "block");
    closeBtn?.addEventListener("click", () => modal.style.display = "none");
    modal?.addEventListener("click", e => { if(e.target===modal) modal.style.display="none"; });

    // Actualizar visualizador según la pestaña activa
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
      setVisualizador(activeTab.dataset.tab);
    }

    // Render inicial (si hay SIDC, se renderiza; si no, no)
    syncSIDCToUI();
    SymbolController.render();
  }

  return {
    init,
    syncSIDCToUI,
    syncUIFromSIDC,
    setSelect
  };
})();

// ============================================
// EVENTO DOMContentLoaded
// ============================================
window.addEventListener("DOMContentLoaded", () => {
  UIController.init();
});

// ============================================
// FUNCIÓN moverVisualizadorASlotActivo
// ============================================
function moverVisualizadorASlotActivo() {
  const slot = document.querySelector(".tab-content.active [data-slot='center']");
  const visualizador = document.getElementById("center-slot");
  if (slot && visualizador && !slot.contains(visualizador)) {
    slot.appendChild(visualizador);
  }
}

// ============================================
// BIND AMPLIFIERS
// ============================================
function bindAmplifiers() {
  document.addEventListener("input", e => {
    const el = e.target;
    if (!el.dataset.amp) return;
    const activeTab = document.querySelector(".tab-content.active");
    if (!activeTab || !activeTab.contains(el)) return;
    handleAmplifier(el.dataset.amp, el.value);
  });

  document.addEventListener("change", e => {
    const el = e.target;
    if (!el.dataset.amp) return;
    const activeTab = document.querySelector(".tab-content.active");
    if (!activeTab || !activeTab.contains(el)) return;
    handleAmplifier(el.dataset.amp, el.value);
  });
}

// ============================================
// HANDLE AMPLIFIER - MODIFICADO: Maneja caso sin SIDC
// ============================================
function handleAmplifier(code, value) {
  // Si no hay SIDC válido, no hacer cambios
  if (!SIDCModel.get() || !SIDCModel.isValid(SIDCModel.get())) {
    console.warn("No hay SIDC válido para aplicar amplificador");
    return;
  }
  
  switch (code) {
    case "b": // ESCALÓN
      if (value === "" || value === "none") {
        SIDCModel.setTwoDigits(8, "00");
      } else {
        SIDCModel.setTwoDigits(8, value);
      }
      resetSelectToPlaceholder("amp-r");
      break;

    case "c":
      SymbolController.updateOption("quantity", value);
      break;

    case "d":
      SIDCModel.setDigit(7, value === "" || value === "none" ? "0" : value);
      resetSelectToPlaceholder("amp-s");
      break;

    case "g":
      SymbolController.updateOption("staffComments", value);
      break;

    case "h":
      SymbolController.updateOption("additionalInformation", value);
      break;

    case "m":
      SymbolController.updateOption("higherFormation", value.trim().toUpperCase());
      break;

    case "q":
      SymbolController.updateOption("direction", value);
      break;

    case "r": // MOVILIDAD
      if (value === "" || value === "none") {
        SIDCModel.setTwoDigits(8, "00");
      } else {
        SIDCModel.setTwoDigits(8, value);
      }
      resetSelectToPlaceholder("amp-b");
      break;

    case "s":
      SIDCModel.setDigit(7, value === "" || value === "none" ? "0" : value);
      resetSelectToPlaceholder("amp-d");
      break;

    case "t":
      SymbolController.updateOption("uniqueDesignation", value.trim());
      break;

    case "v":
      SymbolController.updateOption("type", value.trim());
      break;

    case "w":
      SymbolController.updateOption("dtg", value.toUpperCase());
      break;

    case "x":
      SymbolController.updateOption("altitudeDepth", value);
      break;

    case "y":
      SymbolController.updateOption("location", value.toUpperCase());
      break;

    case "z":
      SymbolController.updateOption("speed", value);
      break;

    case "ad":
      SymbolController.updateOption("platformType", value.trim());
      break;

    case "ae":
      SymbolController.updateOption("equipmentTeardownTime", value.trim());
      break;

    case "af":
      SymbolController.updateOption("commonIdentifier", value.trim().toUpperCase());
      break;

    case "al":
      SIDCModel.setDigit(6, value);
      break;

    case "ao":
      SymbolController.updateOption(
        "engagementBar",
        value === "" || value === "none" ? null : value
      );
      break;

    case "shq":
      SymbolController.updateOption("specialHeadquarters", value.toUpperCase());
      break;

    case "m1": // Modificador 1
      if (value === "" || value === "none") {
        SIDCModel.setTwoDigits(16, "00");
      } else {
        SIDCModel.setTwoDigits(16, value);
      }
      break;

    case "m2": // Modificador 2
      if (value === "" || value === "none") {
        SIDCModel.setTwoDigits(18, "00");
      } else {
        SIDCModel.setTwoDigits(18, value);
      }
      break;

    case "icon":
      if (value === "" || value === "none") {
        SIDCModel.setIcon("000000");
      } else {
        SIDCModel.setIcon(value);
      }
      break;
  }

  UIController.syncSIDCToUI();
  SymbolController.render();
}

// ============================================
// RESETEAR FORMULARIO
// ============================================
function resetearFormulario() {
  document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
    input.value = '';
  });

  document.querySelectorAll('select').forEach(select => {
    if (select.querySelector('option[value=""]')) {
      select.value = '';
    } else if (select.querySelector('option[value="none"]')) {
      select.value = 'none';
    } else {
      select.selectedIndex = 0;
    }
  });

  document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
    input.checked = false;
  });
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================
function resetSelectToPlaceholder(id) {
  const el = document.getElementById(id);
  if (!el) return;
  setTimeout(() => {
    el.selectedIndex = 0;
  }, 0);
}

function updateModifier1(value) {
  const v = value.trim();
  if (!/^\d{2}$/.test(v)) {
    SIDCModel.setTwoDigits(16, "00");
  } else {
    SIDCModel.setTwoDigits(16, v);
  }
  UIController.syncSIDCToUI();
  SymbolController.render();
}

function updateModifier2(value) {
  const v = value.trim();
  if (!/^\d{2}$/.test(v)) {
    SIDCModel.setTwoDigits(18, "00");
  } else {
    SIDCModel.setTwoDigits(18, v);
  }
  UIController.syncSIDCToUI();
  SymbolController.render();
}

// ============================================
// BOTONES DE DESCARGA - MODIFICADOS
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Botón SVG
  const downloadSvg = document.getElementById("download-svg");
  if (downloadSvg) {
    downloadSvg.addEventListener("click", () => {
      const svgElement = document.querySelector("#resultado svg");
      if (!svgElement) {
        alert("No hay símbolo para descargar");
        return;
      }

      const sidc = SIDCModel.get() || "simbolo_otan";

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);

      const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = sidc + ".svg";
      a.click();

      URL.revokeObjectURL(url);
    });
  }

  // Botón PNG
  const downloadPng = document.getElementById("download-png");
  if (downloadPng) {
    downloadPng.addEventListener("click", () => {
      const svgElement = document.querySelector("#resultado svg");
      if (!svgElement) {
        alert("No hay símbolo para descargar");
        return;
      }

      const sidc = SIDCModel.get() || "simbolo_otan";
      const scale = 4;
      const background = "white";

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        if (background === "white") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);

        URL.revokeObjectURL(url);

        canvas.toBlob(blob => {
          const pngUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = pngUrl;
          a.download = sidc + ".png";
          a.click();
          URL.revokeObjectURL(pngUrl);
        }, "image/png");
      };

      img.src = url;
    });
  }

  // Botón básico
  const btnBasico = document.getElementById("btn-basico");
  if (btnBasico) {
    btnBasico.addEventListener("click", () => {
      window.location.href = "index_basico.html";
    });
  }

  document.getElementById("btn-ayuda").addEventListener("click", () => {
    window.open("bibliografia/ayuda.pdf", "_blank");
  });


});