# 📋 Guía para Actualizar la Flota de Chavez Group

## 1. Ubicación de archivos

```
src/
├── data/
│   └── fleet-data.json          ← Actualiza aquí los números y datos
├── assets/
│   ├── fleet/
│   │   ├── caja_seca.png
│   │   └── caja_refrigerada.png
│   ├── truck-red.jpg            ← Actualiza estas imágenes
│   ├── truck-red2.jpg
│   ├── truck-black.jpg
│   ├── truck-white.jpg
│   ├── truck-side.jpg
│   ├── truck-fleet.jpg
│   ├── truck-hero.jpg
│   └── ...
└── components/
    └── Fleet.tsx                ← NO EDITAR (componente automático)
```

---

## 2. Actualizar `src/data/fleet-data.json`

### Estructura de cada tracto:

```json
{
  "id": 1,                        // Número único (1-9 para tractos)
  "num": "79",                    // NÚMERO del tracto (edita aquí)
  "name": "Tracto Rojo",          // Nombre descriptivo (ej: "Tracto Rojo Oscuro")
  "img": "truck-red.jpg",         // Nombre del archivo de imagen
  "type": "Tracto",               // NO CAMBIAR (automático)
  "color": "Rojo",                // Color del tracto (edita aquí)
  "capacity": "Hasta 30 ton · Caja 53\"",  // Capacidad (puedes cambiar)
  "features": [                   // Lista de características
    "GPS Satelital",
    "Seguro vial vigente",
    "Caja seca 53\""
  ],
  "highlight": null               // NO CAMBIAR (es null por defecto)
}
```

### Campos que DEBES editar:

| Campo | Qué es | Ejemplo |
|-------|--------|---------|
| `num` | Número del tracto | `"79"`, `"66"`, `"69"`, `"44"` |
| `name` | Nombre descriptivo | `"Tracto Rojo"`, `"Tracto Negro Intenso"` |
| `color` | Color visible | `"Rojo"`, `"Negro"`, `"Blanco"` |
| `img` | Archivo de imagen | `"truck-red.jpg"` |
| `features` | Características del vehículo | `["GPS Satelital", "Seguro vial vigente"]` |
| `capacity` | Capacidad de carga | `"Hasta 30 ton · Caja 53\""` |

### Ejemplo de tracto completamente personalizado:

```json
{
  "id": 5,
  "num": "70",                    // Número real del tracto
  "name": "Tracto Rojo Intenso",  // Nombre personalizado
  "img": "truck-hero.jpg",        // Apunta a la imagen correcta
  "type": "Tracto",
  "color": "Rojo Intenso",        // Color personalizado
  "capacity": "Hasta 30 ton · Caja 53\"",
  "features": [
    "GPS Satelital",
    "Seguro vial vigente",
    "Caja seca 53\"",
    "Aire acondicionado"          // Puedes agregar más características
  ],
  "highlight": null
}
```

---

## 3. Reemplazar imágenes

### Paso 1: Obtén tus imágenes

Necesitas 9 imágenes de tus tractos (una por cada vehículo).

### Paso 2: Sube las imágenes a `src/assets/`

Usa estos nombres para que sea fácil:
- `truck-red.jpg` → Tracto 79 (Rojo)
- `truck-red2.jpg` → Tracto 66 (Rojo Claro)
- `truck-black.jpg` → Tracto 69 (Negro)
- `truck-white.jpg` → Tracto 44 (Blanco)
- `truck-side.jpg` → Tu tracto 5
- `truck-fleet.jpg` → Tu tracto 6
- `truck-hero.jpg` → Tu tracto 7
- `fleet/69ddd77b-4747-44fd-98c2-83bae0129650.jfif` → Tu tracto 8
- `fleet/796ed8cc-866a-4d77-bba5-daaee913fa19.jfif` → Tu tracto 9

### Paso 3: Actualiza el campo `img` en el JSON

```json
{
  "num": "70",
  "img": "truck-side.jpg"  ← Cambia a tu archivo
}
```

---

## 4. Actualizar características

Puedes personalizar la lista de características de cada tracto:

```json
"features": [
  "GPS Satelital",              // Mantener siempre
  "Seguro vial vigente",        // Mantener siempre
  "Caja seca 53\"",             // O "Caja Refrigerada" según aplique
  "Aire acondicionado",         // Agregar si es necesario
  "Sistema de frenos ABS",      // Agregar si es necesario
  "Suspensión neumática"        // Agregar características reales
]
```

---

## 5. Cajas secas y refrigeradas

**NO CAMBIES** estas dos entradas (son las cajas disponibles):

```json
{
  "id": 10,
  "num": "x9",
  "name": "Caja Seca 53\"",
  "type": "Caja Seca",
  "img": "fleet/caja_seca.png",
  "highlight": "x9"
}

{
  "id": 11,
  "num": "x2",
  "name": "Caja Refrigerada 53\"",
  "type": "Caja Refrigerada",
  "img": "fleet/caja_refrigerada.png",
  "highlight": "x2"
}
```

---

## 6. Checklist de actualización

- [ ] Obtuve 9 imágenes reales de mis tractos
- [ ] Subí las imágenes a `src/assets/`
- [ ] Actualicé los 4 tractos confirmados:
  - [ ] Tracto 79 (Rojo)
  - [ ] Tracto 66 (Rojo Claro)
  - [ ] Tracto 69 (Negro)
  - [ ] Tracto 44 (Blanco)
- [ ] Completé los 5 tractos faltantes con:
  - [ ] Números correctos
  - [ ] Nombres descriptivos
  - [ ] Colores reales
  - [ ] Imágenes correspondientes
  - [ ] Características específicas
- [ ] Verifiqué que NO hay campos `[Editable]` en el JSON
- [ ] Verifiqué que todas las rutas de imagen en `img` son correctas

---

## 7. Referencia rápida de edición

### Para editar en GitHub (fácil):

1. Ve a `src/data/fleet-data.json`
2. Haz clic en el ✏️ (editar)
3. Busca el tracto que quieres cambiar (por ejemplo, `"num": "EDITABLE"`)
4. Edita los campos
5. Haz commit con un mensaje como: `"Actualizar Tracto 70 con datos correctos"`

### Para subir imágenes en GitHub:

1. Ve a `src/assets/`
2. Haz clic en "Add file" → "Upload files"
3. Carga tus 9 imágenes
4. Asegúrate que los nombres coincidan con los del JSON

---

## 8. Validación

Antes de dar por terminado, verifica:

- ✅ Cada tracto tiene un `num` único (79, 66, 69, 44, 70, 71, 72, 73, 74)
- ✅ Cada tracto tiene un archivo de imagen que existe en `src/assets/`
- ✅ El nombre coincide con el color (ej: "Tracto Rojo" → `color: "Rojo"`)
- ✅ NO hay campos con texto `[Editable]` o `EDITABLE`
- ✅ Las características tienen sentido para cada tracto

---

## 9. Preguntas frecuentes

**P: ¿Puedo cambiar la capacidad de un tracto?**
R: Sí, edita el campo `capacity`. Ejemplo: `"Hasta 25 ton · Caja 53\""`

**P: ¿Puedo agregar más características?**
R: Sí, agrega elementos a la lista `features`. Puedes tener 3 o 10 características.

**P: ¿Qué pasa si uso un archivo de imagen que no existe?**
R: La imagen no se mostrará. Asegúrate que el nombre en `img` existe en `src/assets/`

**P: ¿Puedo cambiar el orden de los tractos?**
R: Sí, puedes reorganizarlos en el JSON. El orden aquí es el orden en que aparecen en la web.

---

## 10. Soporte

Si tienes dudas sobre:
- 📝 **Formato JSON**: Valida en [jsonlint.com](https://www.jsonlint.com/)
- 🖼️ **Tamaño de imágenes**: Usa imágenes de al menos 400x300px
- 🔗 **Rutas de archivos**: Comprueba que existan en `src/assets/`

---

**Última actualización**: 2026-06-14
