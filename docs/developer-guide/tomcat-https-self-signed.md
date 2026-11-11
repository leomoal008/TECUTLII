# HTTPS de Tomcat con certificado autofirmado

Esta guía describe la configuración realizada para habilitar la geolocalización de MapStore desde otros equipos de la red. Los navegadores consideran `localhost` un contexto seguro aunque use HTTP, pero para una dirección LAN como `192.168.1.150` requieren HTTPS.

## Archivos configurados

- Keystore con clave privada: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\conf\tomcat-mapstore.p12`
- Certificado público para instalar en clientes: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\conf\tomcat-mapstore.crt`
- Configuración HTTPS: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\conf\server.xml`

El certificado incluye estos nombres/IP: `192.168.1.150`, `127.0.0.1` y `localhost`. Si se accede a Tomcat mediante otro nombre DNS o una IP diferente, hay que emitir un certificado nuevo que incluya ese nombre/IP en el SAN.

## URL de MapStore

Usar:

```text
https://192.168.1.150:8443/mapstore/
```

El conector HTTP existente en el puerto `8585` se mantiene activo. Acceder por HTTP no habilita geolocalización en otros hosts.

## Confiar en el certificado desde los clientes

Un certificado autofirmado no es confiable automáticamente. En cada dispositivo cliente:

1. Copiar `tomcat-mapstore.crt` desde el servidor. Copiar solo el `.crt`; nunca copiar `tomcat-mapstore.p12`, que contiene la clave privada.
2. En Windows, abrir `mmc.exe`, agregar el complemento **Certificados** para **Cuenta de equipo** (o **Mi cuenta de usuario**) e importar el `.crt` en **Entidades de certificación raíz de confianza > Certificados**.
3. Cerrar y volver a abrir el navegador y visitar `https://192.168.1.150:8443/mapstore/`.
4. Confirmar que no aparece una advertencia de certificado y probar el botón de ubicación. El navegador también debe tener permiso de ubicación para ese sitio.

Firefox puede usar su propio almacén de certificados; si no toma el almacén de Windows, importa el `.crt` en las autoridades certificadoras de Firefox.

## Reinicio y firewall

Después de cambiar `server.xml`, reiniciar el servicio **Tomcat9**. Permitir tráfico TCP entrante al puerto `8443` en el firewall de Windows y en cualquier firewall de red aplicable. La disponibilidad desde otros equipos depende también de las reglas de red; HTTPS por sí solo no abre esos accesos.

## Verificación

En el servidor, comprobar que el certificado y el keystore se pueden leer:

```powershell
& 'C:\Program Files\Java\jdk-11\bin\keytool.exe' -list -v -alias mapstore-https -keystore 'C:\Program Files\Apache Software Foundation\Tomcat 9.0\conf\tomcat-mapstore.p12' -storetype PKCS12
```

La contraseña del keystore se encuentra en el atributo `certificateKeystorePassword` del conector HTTPS en `server.xml`. No compartir el keystore ni su contraseña. Para confirmar el puerto en escucha:

```powershell
Test-NetConnection 192.168.1.150 -Port 8443
```

## Notas de seguridad

Este certificado es autofirmado y se debe distribuir únicamente a los clientes que administras. El acceso sigue sujeto al firewall y a la configuración de autenticación de cada aplicación. Para un entorno público o de producción, usar un certificado emitido por una autoridad certificadora confiable y un nombre DNS estable.
