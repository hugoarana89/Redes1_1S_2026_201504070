## 1. Topologías Propuestas por Sede


**Carnet:** 201504070 | **XX = 70** | **Y = 0**


### 🔵 Backbone Core (Núcleo Nacional)
**Topología:** Triángulo redundante (Full Mesh entre 3 routers core) + enlaces hacia routers de borde.

```
                    [R-Core1]
                   /    |    \
          Fibra  /   EtherCh   \ Serial (WAN)
                /      |        \
         [R-Core2]----[R-Core3]
              |              |
          R-Central1      R-Occidente / R-Norte
```

- El núcleo está compuesto por **3 routers de Capa 3** (R-Core1, R-Core2, R-Core3).
- La interconexión del núcleo utiliza **EtherChannel (LACP)** entre R-Core1 y R-Core2 como canal principal.
- El enlace entre R-Core1 y R-Core3 es de **fibra óptica**.
- El enlace entre R-Core2 y R-Core3 es **serial (WAN)**.
- **Dominio OSPF:** R-Core1, R-Core2, R-Core3 y R-Central1/R-Central2 (backbone y Data Center).
- **Dominio EIGRP:** R-Norte y su zona de expansión regional.
- **Dominio RIPv2:** R-Occidente y la sede legada de red antigua.
- **Rutas Estáticas:** Data Center / Sede Central (segmento de alta seguridad).
- **Puntos de redistribución:** R-Core1 (OSPF ↔ EIGRP) y R-Core2 (OSPF ↔ RIPv2 y Estáticas).

---

### 🟠 Sede Occidente (Agencia Regional Comercial)
**Topología:** Estrella simple con Switch de Distribución central + Router-on-a-Stick.

```
   [R-Occidente] (Router-on-a-Stick)
         |  (Trunk 802.1Q)
      [SW-Dist-OCC] (Switch Principal)
       /    |    \    \
  [SW-A1][SW-A2][SW-A3][SW-A4]
   Cajas Asesores Gerencia Seguridad
```

---

### 🟢 Sede Norte (Centro de Autorización de Créditos)
**Topología:** Anillo/Triángulo de switches (bucles físicos intencionales) con Rapid PVST+.

```
   [R-Norte]
       |
   [SW-Core-N] ← Root Bridge (forzado)
    /       \
[SW-A-N1]--[SW-A-N2]
  Análisis   Auditoría/Legal
```

---

### 🔴 Sede Oriente (Centro Financiero Legado)
**Topología:** Estrella dual conectada simultáneamente a MS1 y MS2 con HSRP.

```
   [MS1]----[MS2]   ← HSRP (Gateway Virtual)
     \        /
      [SW-ACC-OR]
      /        \
  PCs-Bóveda  PCs-Plataforma
```

---

### ⚫ Data Center y Sede Central (Alta Seguridad)
**Topología:** Jerárquica de 3 capas (Core → Distribución → Acceso) con EtherChannel.

```
   [R-Central2]
        |
   [SW-Dist-DC]
    /         \
[SW-Acc-BD] [SW-Acc-Web/NOC]
  (EtherChannel LACP - 2 cables mínimo)
```

---

### Resumen de Nomenclatura y Dispositivos

| Dispositivo    | Hostname       | Rol                          | Sede            |
|----------------|----------------|------------------------------|-----------------|
| Router Core 1  | R-Core1        | OSPF Core + Redistribución   | Backbone        |
| Router Core 2  | R-Core2        | OSPF Core + Redistribución   | Backbone        |
| Router Core 3  | R-Core3        | OSPF Core                    | Backbone        |
| Router Central | R-Central1     | Redistribución Estáticas→OSPF| Backbone/DC     |
| Router Central | R-Central2     | Router de borde DC           | Data Center     |
| Router Norte   | R-Norte        | EIGRP Edge                   | Sede Norte      |
| Router Occidente| R-Occidente   | RIPv2 + Router-on-a-Stick    | Sede Occidente  |
| SW Multicapa 1 | MS1            | HSRP Active                  | Sede Oriente    |
| SW Multicapa 2 | MS2            | HSRP Standby                 | Sede Oriente    |
| SW Dist Occ    | SW-Dist-OCC    | Switch Principal VTP Server  | Sede Occidente  |
| SW Core Norte  | SW-Core-N      | Root Bridge (priority 4096)  | Sede Norte      |
| SW Acceso N1   | SW-A-N1        | VTP Client                   | Sede Norte      |
| SW Acceso N2   | SW-A-N2        | VTP Client                   | Sede Norte      |
| SW Dist DC     | SW-Dist-DC     | Switch Distribución DC       | Data Center     |
| SW Acc BD      | SW-Acc-BD      | EtherChannel hacia Dist      | Data Center     |

---

### Resumen de Protocolos por Dominio

| Dominio          | Protocolo  | Dispositivos involucrados              |
|------------------|------------|----------------------------------------|
| Núcleo Central   | OSPF       | R-Core1, R-Core2, R-Core3, R-Central1 |
| Expansión Regional| EIGRP     | R-Core2, R-Norte                       |
| Red Legada       | RIPv2      | R-Core3, R-Occidente                   |
| Alta Seguridad   | Estático   | R-Central1, R-Central2                 |
| Redundancia L3   | HSRP       | MS1, MS2 (Sede Oriente)                |
| Redundancia L2   | Rapid PVST+| SW-Core-N, SW-A-N1, SW-A-N2           |
| Agregación       | EtherChannel LACP | SW-Dist-DC ↔ SW-Acc-BD          |
| Admin VLANs      | VTP        | SW-Dist-OCC (Server), SW-Ax (Clients)  |

---
