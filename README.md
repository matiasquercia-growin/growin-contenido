# Growin Contenido

Espacio de publicación de recursos públicos de Growin. El repositorio es privado y el sitio es público. No incluir información de clientes o alumnos, credenciales, tokens ni código de Admin o Privado.

## Publicar recursos
1. Crear una carpeta en public/recursos/<nombre-del-recurso>/ con index.html y sus archivos. Usar nombres de ruta únicos, minúsculas y guiones.
2. Probar localmente (npm install, npm run dev); abrir /recursos/<nombre-del-recurso>/index.html.
3. Enviar cambios a GitHub. Revisar que no haya datos privados, enlaces rotos o secretos. El enlace de producción será https://contenido.growinads.com/recursos/<nombre-del-recurso>/index.html una vez desplegado.
4. Agregar los recursos que deban aparecer en la portada a app/recursos.js.
5. Publicar mediante la integración Git de Vercel, cuando se habilite el plan y flujo de publicación.

## Permisos
Solo los colaboradores autorizados de este repositorio pueden editar su código. No compartir tokens personales, ni dar acceso general al workspace de Vercel. No agregar secretos compartidos de otros proyectos. Los cambios de colaboradores pueden afectar el sitio público completo: revisar antes de publicar. Los permisos y el flujo de publicación del equipo todavía están pendientes de configuración.
