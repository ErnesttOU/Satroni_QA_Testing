Satroni E-commerce — API Testing con Postman

Descripción
Testing manual de la API REST de Satroni, 
e-commerce de calculadoras en producción 
construido con HTML/CSS/JS y Supabase.

**Sitio en producción:** [satroni.com](https://satroni.com)

##  Herramienta
Postman v7.54

## Endpoints testeados

| Método | Endpoint | Descripción | Código | Resultado |
|--------|----------|-------------|--------|-----------|
| GET | /entregras | Obtener todos los registros | 200 OK | ✅ Pass |
| GET | /entregras?nombre=eq.X | Filtrar por nombre | 200 OK | ✅ Pass |
| POST | /entregras | Insertar nuevo registro | 201 Created | ✅ Pass |
| DELETE | /entregras?id=eq.X | Eliminar registro | 204 No Content | ✅ Pass |
| GET | /entregras (sin auth) | Acceso sin credenciales | 401 Unauthorized | ✅ Pass |

## Hallazgos
- La API responde correctamente en todos los 
  métodos testeados
- El sistema de autenticación bloquea 
  correctamente requests sin credenciales
- Los filtros de consulta funcionan 
  correctamente
- Tiempos de respuesta dentro de rangos 
  aceptables (86ms - 241ms)

## Conclusión
La API de Satroni supera todos los casos de 
prueba funcionales y de seguridad básica. 
No se detectaron defectos críticos.

> **Nota:** Los headers de autenticación usan 
> la anon key pública de Supabase, segura para 
> uso en frontend y testing.

## 🐛 Bug Tracking — JIRA

Proyecto QA Testing con 5 bugs documentados, 
priorizados y asignados en JIRA Scrum.

![JIRA Board](jira-board.png)
