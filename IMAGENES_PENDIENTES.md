# Imágenes pendientes de agregar manualmente

Estos archivos deben ser subidos por el usuario y luego conectados en el código.

## Logos de referencias empresariales
Colocar en `src/assets/logos/` y luego importar en `src/components/Clients.tsx`
reemplazando `logo: null` por `logo: <importedLogo>.url` (si se sube como asset)
o `logo: importedLogo` (si se importa como imagen normal).

| Empresa | Archivo esperado |
|---|---|
| Nestlé | `nestle_logotipo.png` |
| Argos | `ARGOS_BC_logotipo.webp` |
| Kellogg's | `Kellogg-Logo-650x366.png` |
| Embotelladora Las Margaritas (Topo Chico) | `topo-chico-logo.png` |
| Kenworth SJR, QRO | `kenworth-logo.png` |

## Imágenes de remolques (sección Flota)
Colocar en `src/assets/fleet/` y actualizar `src/components/Fleet.tsx`
para que las últimas dos tarjetas (Caja Seca / Caja Refrigerada) usen
estas imágenes en lugar de `/placeholder.svg`.

| Tipo | Archivo esperado |
|---|---|
| Caja Seca 53' | `caja_seca.png` |
| Caja Refrigerada 53' | `caja_refrigerada.png` |
