---
title: Configuración del servidor
---

# Establecer configuración de Gmail

Crear un archivo con el nombre 'mail-config.properties' y añadirle la siguiente información:

mail.transport.protocol=smtp
mail.smtp.host=smtp.gmail.com
mail.smtp.port=465
mail.smtp.auth=true
mail.smtp.ssl.enable=true
mail.smtp.socketFactory.port=465
mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
mail.store.protocol=imaps
mail.imaps.host=imap.gmail.com
mail.imaps.port=993
mail.imaps.timeout=10000
mail.imap.partialfetch=false
mail.poll.folder=INBOX
mail.sender=usuario@gmail.com
mail.sender.alias=alias
mail.attachment.download=true
mail.attachment.path=attachments
mail.user=usuario@gmail.com
mail.password=contraseña

Guardar este archivo en 'camunda-bpm-tomcat-X.X.X/server/apache-tomcat-X.X.X/conf/', donde 'X.X.X' es la versión de Camunda y Tomcat que se están usando.


# Configurar variable de entorno

## Sistemas operarivos UNIX

Abrir el archivo 'setenv.sh', ubicado en 'camunda-bpm-tomcat-X.X.X/server/apache-tomcat-X.X.X/bin/' y añadir 'export MAIL_CONFIG="$CATALINA_HOME/conf/mail-config.properties"' en la primera línea.

## Windows

Abrir el archivo 'setenv.bat', ubicado en 'camunda-bpm-tomcat-X.X.X/server/apache-tomcat-X.X.X/bin/' y añadir 'set "MAIL_CONFIG=%CATALINA_HOME%\conf\mail-config.properties"' en la primera línea.
