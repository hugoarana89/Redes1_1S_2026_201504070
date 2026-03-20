**UNIVERSIDAD DE SAN CARLOS DE GUATEMALA**   
**FACULTAD DE INGENIERÍA**  
**INGENIERÍA EN SISTEMAS**  
**REDES DE COMPUTADORAS 1**  
**PRIMER SEMESTRE DE 2026**

| Registro académico: 201504070  | CUI: 3236666040511 |
| :---- | :---- |
| **Nombre:** Hugo Jorge Luis Perez Arana | **Proyecto:** 1 |
| **Ing.** Luis Fernando Espino Barrios | **Sección:** A |


# Capturas de la topología completa y de cada área.

## Topología completa

<div align="center">
  <img src="img/Topologia.png" alt="" width="100%">
</div>

## Topología de cada area

### Area A

<div align="center">
  <img src="img/edificio_a_v.jpg" alt="" width="50%">
</div>

### Area B

<div align="center">
  <img src="img/edificio_b_v.jpg" alt="" width="50%">
</div>

### Area C

<div align="center">
  <img src="img/edificio_c_v.jpg" alt="" width="50%">
</div>

### Area D

<div align="center">
  <img src="img/edificio_d_v.jpg" alt="" width="50%">
</div>

---

# Topología etiquetando los tipos de interfaces y medios de transmisión.

## Topología completa

<div align="center">
  <img src="img/Topología_etiqueta.png" alt="" width="100%">
</div>

## Topología de cada area

### Area A

<div align="center">
  <img src="img/edificio_a_c.jpg" alt="" width="50%">
</div>

### Area B

<div align="center">
  <img src="img/edificio_b_c.jpg" alt="" width="50%">
</div>

### Area C

<div align="center">
  <img src="img/edificio_c_c.jpg" alt="" width="50%">
</div>

### Area D

<div align="center">
  <img src="img/edificio_d_c.jpg" alt="" width="50%">
</div>


# Dominios de Colisión por Área

Un switch crea un dominio de colisión por puerto (conmutado). Hubs y repetidores crean un dominio compartido entre todos sus puertos.

## Edificio A

| # | Tipo | Dispositivos en el dominio | Nota |
|---|------|---------------------------|------|
| A-1 | Conmutado | SW-A1 ↔ SW-A2 (GE0/1 / GE8/1) | Enlace troncal punto a punto |
| A-2 | Conmutado | SW-A1 ↔ SW-A3 (GE0/1 / GE9/1) | Enlace troncal punto a punto |
| A-3 | Conmutado | SW-A2 Fa0/1 ↔ SW-A3 Fa0/1 (EtherChannel #1) | Port-Channel — cada enlace físico es su propio dominio |
| A-4 | Conmutado | SW-A2 Fa0/2 ↔ SW-A3 Fa0/2 (EtherChannel #2) | Port-Channel — 2.º enlace físico paralelo |
| A-5 | Conmutado | SW-A2 Fa0/3 — PC Laboratorio2 | |
| A-6 | Conmutado | SW-A2 Fa0/4 — PC Laboratorio4 | |
| A-7 | Conmutado | SW-A2 Fa0/5 — PC Admin2 | |
| A-8 | Conmutado | SW-A3 Fa0/3 — AC-A1 (Port0) | AP conectado al switch |
| A-9 | **Compartido (inalámbrico)** | AC-A1 — Smartphone Docencia1, Laptop Docencia2, Laptop Docencia3 | Medio inalámbrico compartido (half-duplex) |
| A-10 | Conmutado | SW-A1 ↔ SW-B1 (Fa4/1 fibra #1) | Inter-edificios EtherChannel |
| A-11 | Conmutado | SW-A1 ↔ SW-B1 (Fa5/1 fibra #2) | Inter-edificios EtherChannel |
| A-12 | Conmutado | SW-A1 ↔ SW-C4 (Fa6/1 fibra #1) | Inter-edificios EtherChannel |
| A-13 | Conmutado | SW-A1 ↔ SW-C4 (Fa7/1 fibra #2) | Inter-edificios EtherChannel |

## Edificio B

| # | Tipo | Dispositivos en el dominio | Nota |
|---|------|---------------------------|------|
| B-1 | Conmutado | SW-B1 ↔ SW-B2 (Fa6/1 fibra #1) | EtherChannel B1↔B2 |
| B-2 | Conmutado | SW-B1 ↔ SW-B2 (Fa7/1 fibra #2) | EtherChannel B1↔B2 |
| B-3 | Conmutado | SW-B1 GE8/1 ↔ SW-B3 GE0/1 | Trunk distribución |
| B-4 | Conmutado | SW-B1 GE9/1 ↔ SW-B4 GE0/1 | Trunk distribución |
| B-5 | Conmutado | SW-B3 Fa0/1 ↔ SW-B4 Fa0/1 | Trunk acceso entre B3 y B4 |
| B-6 | Conmutado | SW-B2 Fa0/1 ↔ Hub-B1 Fa0 | Enlace switch→hub |
| B-7 | **Compartido (Hub)** | Hub-B1 — Biblioteca3, Biblioteca4, Biblioteca5 | Un solo dominio de colisión compartido — Segmento Legacy L1 |
| B-8 | Conmutado | SW-B3 Fa0/2 — PC Biblioteca1 | |
| B-9 | Conmutado | SW-B3 Fa0/3 — Laptop Docencia6 | |
| B-10 | Conmutado | SW-B4 Fa0/2 — Laptop Admin1 | |
| B-11 | Conmutado | SW-B4 Fa0/3 — Laptop Biblioteca2 | |
| B-12 | Conmutado | SW-B2 ↔ SW-D5 (Fa4/1 fibra #1) | EtherChannel inter-edificios B↔D |
| B-13 | Conmutado | SW-B2 ↔ SW-D5 (Fa5/1 fibra #2) | EtherChannel inter-edificios B↔D |

## Edificio C

| # | Tipo | Dispositivos en el dominio | Nota |
|---|------|---------------------------|------|
| C-1 | Conmutado | SW-C4 GE8/1 ↔ Hub-C1 GE7 | Enlace switch→hub de distribución |
| C-2 | **Compartido (Hub)** | Hub-C1 — SW-C1 (Fa0), SW-C2 (Fa0/1), SW-C3 (Fa0/1) | Hub-C1 es el núcleo: un único dominio de colisión compartido para todo el edificio |
| C-3 | Conmutado | SW-C2 Fa0/2 — Laptop Docencia7 | |
| C-4 | Conmutado | SW-C2 Fa0/3 — PC Docencia8 | |
| C-5 | Conmutado | SW-C1 Fa1/1 — PC Docencia9 | |
| C-6 | Conmutado | SW-C3 Fa0/2 — PC Biblioteca6 | |
| C-7 | Conmutado | SW-C3 Fa0/3 — PC Admin3 | |
| C-8 | Conmutado | SW-C4 ↔ SW-D1 (Fa4/1 fibra #1) | EtherChannel inter-edificios C↔D |
| C-9 | Conmutado | SW-C4 ↔ SW-D1 (Fa5/1 fibra #2) | EtherChannel inter-edificios C↔D |

## Edificio D

| # | Tipo | Dispositivos en el dominio | Nota |
|---|------|---------------------------|------|
| D-1 | Conmutado | SW-D1 Fa6/1 ↔ SW-D5 Fa6/1 (fibra) | Trunk intra-edificio D1↔D5 |
| D-2 | Conmutado | SW-D5 GE7/1 ↔ SW-D2 GE7/1 | Trunk distribución |
| D-3 | Conmutado | SW-D2 Fa0/1 ↔ SW-D4 Fa0/1 | Trunk acceso hacia D4 |
| D-4 | **Compartido (Repetidor)** | SW-D2 Fa1/1 — Repetidor-D1 — SW-D3 Fa0/1 | El repetidor extiende el medio físico: un único dominio de colisión en los tres extremos — Segmento extendido L1 |
| D-5 | Conmutado | SW-D1 Fa0/1 ↔ SW-E1 Fa0/1 | Trunk hacia SW-E1 (VTP transparente) |
| D-6 | Conmutado | SW-E1 Fa0/2 ↔ SW-D2 Fa2/1 | Trunk SW-E1↔distribución D2 |
| D-7 | Conmutado | AC-D1 Port0 ↔ SW-E1 GE0/1 | Enlace AP→switch visitantes |
| D-8 | **Compartido (inalámbrico)** | AC-D1 — PC Visitantes1, PC Visitantes2, PC Visitantes3 | Medio inalámbrico compartido VLAN 5X |
| D-9 | Conmutado | SW-D4 Fa0/2 — PC Biblioteca7 | |
| D-10 | Conmutado | SW-D4 Fa0/3 — PC Laboratorio3 | |
| D-11 | Conmutado | SW-D3 Fa0/2 — PC Admin4 | |
| D-12 | Conmutado | SW-D3 Fa0/3 — PC Admin5 | |
| D-13 | Conmutado | SW-D3 Fa0/4 — Server Docencia10 | |

---

# Dominios de Broadcast por VLAN

No existe enrutamiento inter-VLAN. Cada VLAN forma un único dominio de broadcast que abarca todos los edificios donde está presente.

| VLAN | Nombre | Dispositivos finales incluidos | Edificios |
|-------------------|--------|-------------------------------|-----------|
| VLAN 10 | ADMIN | PC Admin2 (Edif. A) · Laptop Admin1 (Edif. B) · PC Admin3 (Edif. C) · PC Admin4, PC Admin5 (Edif. D) | A, B, C, D |
| VLAN 20 | DOCENTES | Smartphone Docencia1, Laptop Docencia2, Laptop Docencia3 (Edif. A) · Laptop Docencia6 (Edif. B) · Laptop Docencia7, PC Docencia8, PC Docencia9 (Edif. C) · Server Docencia10 (Edif. D) | A, B, C, D |
| VLAN 30 | BIBLIOTECA | PC Biblioteca1, Laptop Biblioteca2, Biblioteca3, Biblioteca4, Biblioteca5 (Edif. B) · PC Biblioteca6 (Edif. C) · PC Biblioteca7 (Edif. D) | B, C, D |
| VLAN 40 | LABORATORIO | PC Laboratorio2, PC Laboratorio4 (Edif. A) · PC Laboratorio3 (Edif. D) | A, D |
| VLAN 50 | VISITANTE | PC Visitantes1, PC Visitantes2, PC Visitantes3 (Edif. D vía AC-D1) | D |

---

# Lista de comandos utilizados en cada dispositivo (VLANs, VTP, STP, EtherChannel, trunk).

## 1. Configuración de edificio A

### 1.1. Habilitar modulos en SW-A1

#### Módulo GigabitEthernet

Se debe de agregar el módulo GigabitEthernet al SW-A1

1. Hacer doble clic en SW-A1
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el switch — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Arrástralo hacia uno de los slots vacíos del switch (los rectángulos en el cuerpo del dispositivo). Hacerlo 2 veces — una por cada puerto Gigabit que se necesita (uno hacia SW-A2 y otro hacia SW-A3)
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, SW-A1 se tendrá puertos llamados:
GigabitEthernet/8/1
GigabitEthernet/9/1

#### Módulos de fibra al SW-A1

SW-A1 es un Switch-PT y necesita puertos de fibra para conectarse al backbone.

1. Hacer clic sobre SW-A1
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia el backbone)
6. Volver a encender el switch haciendo clic en el botón de poder.

> ⚠️ Si no se apaga el switch antes de agregar módulos, no funcionará.

<div align="center">
  <img src="img/img1.jpg" alt="" width="50%">
</div>

---

### 1.2. Configuración de Laptop "Docencia2" y "Docencia3"

#### Colocar targeta de red:

1. Hacer clic en la Laptop
2. Ir a la pestaña Physical
3. Apagar la laptop (botón rojo)
4. Se verá el módulo de red instalado (FastEthernet)
5. Retírarlo (arrástrarlo hacia afuera).
6. Buscar en la lista de módulos: WPC300N (Esa es la tarjeta inalámbrica)
7. Arrástrala al slot vacío
8. Encender nuevamente la laptop

#### Ahora conectarla al WiFi:

1. Ir a la pestaña Desktop
2. Clic en PC Wireless
3. En la pestaña "Connect" seleccionar la red (SSID)
4. Si el AP no tiene seguridad configurada, se conectará inmediatamente.
5. Ahora debería aparecer la línea con ondas 📶 igual que con el smartphone.

### Verificar que sí está conectada:

1. En la laptop: Desktop → IP Configuration
2. Si está en DHCP (aunque aquí se usa IP manual), al menos debe mostrar que la interfaz Wireless está activa.

---

### 1.3. Tabla de conexiones del Edificio A

| Origen | Puerto origen | Cable | Destino | Puerto destino | Propósito |
|--------|-------------|-------|---------|---------------|-----------|
| SW-A2 | GigabitEthernet0/1 | **Copper Cross-Over** | SW-A1 | GigabitEthernet8/1 | Trunk acceso |
| SW-A3 | GigabitEthernet0/1 | **Copper Cross-Over** | SW-A1 | GigabitEthernet9/1 | Trunk acceso |
| SW-A2 | FastEthernet0/1 | **Copper Straight-Through** | SW-A3 | FastEthernet0/1 | EtherChannel A2↔A3 |
| SW-A2 | FastEthernet0/2 | **Copper Straight-Through** | SW-A3 | FastEthernet0/2 | EtherChannel A2↔A3 |
| SW-A2 | FastEthernet0/3 | **Copper Straight-Through** | PC Laboratorio2 | FastEthernet0 | Acceso |
| SW-A2 | FastEthernet0/4 | **Copper Straight-Through** | PC Laboratorio4 | FastEthernet0 | Acceso |
| SW-A2 | FastEthernet0/5 | **Copper Straight-Through** | PC Admin2 | FastEthernet0 | Acceso |
| SW-A3 | FastEthernet0/3 | **Copper Straight-Through** | AC-A1 | Port0 |
| AC-A1 |       Pot1      |       **Wireless**           | SmartPhone Docencia1 | Wireless0 | Acceso |
| AC-A1 |       Pot1      |       **Wireless**          | Laptop Docencia2     | Wireless0 | Acceso |
| AC-A1 |       Pot1      |       **Wireless**          | Laptop Docencia3     | Wireless0 | Acceso |

---

### 1.4. Configuración de Switch-PT (SW-A1):

Doble clic en SW-A1 → pestaña CLI.

#### 1.4.1. Nombre y configuración básica

```sh
enable
configure terminal
hostname SW-A1
no ip domain-lookup
```

#### 1.4.2. Modo VTP Server y dominio

```sh
vtp mode server
vtp domain C7_NetCore
```

#### 1.4.3. Crear las VLANs (solo se hace en el Server)

```sh
vlan 10
name ADMIN
vlan 20
name DOCENTES
vlan 30
name BIBLIOTECA
vlan 40
name LABORATORIO
vlan 50
name VISITANTE
exit
```

Verificar que se crearon:

```sh
show vlan brief
```

<div align="center">
  <img src="img/img2.jpg" alt="" width="50%">
</div>

#### 1.4.4. STP modo PVST y Root Bridge

```sh
spanning-tree mode pvst
spanning-tree vlan 10,20,30,40,50 priority 4096
```

#### 1.4.5. Puerto troncal hacia SW-A2 y SW-A3

```sh
interface gigabitEthernet8/1
switchport mode trunk
exit

interface gigabitEthernet9/1
switchport mode trunk
exit
```

#### 1.4.6. Banner MOTD

```sh
banner motd #
Bienvenido a Edificio A - NETCORE_201504070
#
```

```sh
end
write memory
exit
```

---

### 1.5.  Configurar SW-A2

Doble clic en SW-A2 → pestaña CLI.

#### 1.5.1. Nombre y básico

```sh
enable
configure terminal
hostname SW-A2
no ip domain-lookup
```

#### 1.5.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 1.5.3. STP modo PVST

```sh
STP modo PVST
```

#### 1.5.4. EtherChannel hacia SW-A3 (PAgP, carnet par = PAgP intra-edificio)

```sh
interface range FastEthernet0/1 - 2
channel-protocol pagp
channel-group 1 mode desirable
exit
```

#### 1.5.5. Configurar el Port-Channel 1 como troncal

```sh
interface port-channel 1
switchport mode trunk
exit
```

#### 1.5.6. Puerto troncal hacia SW-A1 (GigabitEthernet)

```sh
interface GigabitEthernet0/1
switchport mode trunk
exit
```

#### 1.5.7. Puertos de acceso para dispositivos finales

```sh
interface FastEthernet0/3
switchport mode access
switchport access vlan 40
exit

interface FastEthernet0/4
switchport mode access
switchport access vlan 40
exit

interface FastEthernet0/5
switchport mode access
switchport access vlan 10
exit
```

```sh
end
write memory
exit
```

---

### 1.6. Configurar SW-A3

Doble clic en SW-A3 → pestaña CLI.

#### 1.6.1. Nombre y básico

```sh
enable
configure terminal
hostname SW-A3
no ip domain-lookup
```

#### 1.6.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 1.6.3. STP modo PVST

```sh
spanning-tree mode pvst
```

#### 1.6.4. EtherChannel hacia SW-A2 (PAgP)

```sh
interface range FastEthernet0/1 - 2
channel-protocol pagp
channel-group 1 mode desirable
exit
```

#### 1.6.5. Port-Channel 1 como troncal

```sh
interface port-channel 1
switchport mode trunk
exit
```

#### 1.6.6. Puerto troncal hacia SW-A1

```sh
interface GigabitEthernet0/1
switchport mode trunk
exit
```

#### 1.6.7. Puerto de acceso para el Access Point (VLAN DOCENTES)

```sh
interface FastEthernet0/3
switchport mode access
switchport access vlan 20
exit
```

```sh
end
write memory
exit
```

---

### 1.7. Configurar el Access Point AC-A1

- Doble clic en AC-A1
- Ir a la pestaña Config
- En el menú izquierdo seleccionar Port 1 (la antena)

Configurar:

- SSID: NetCore_Docencia (o el nombre que prefieras)
- Authentication: Disabled (para simplificar en Packet Tracer)

No necesita más configuración — el switch ya lo pone en VLAN 20

---

### 1.8. Asignar IPs a los dispositivos finales

Hacer clic en cada PC/Laptop → pestaña **Desktop** → **IP Configuration** → seleccionar **Static**

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Laboratorio2 | 192.168.40.2 | 255.255.255.0 | 40 (LABORATORIO) |
| Laboratorio4 | 192.168.40.4 | 255.255.255.0 | 40 (LABORATORIO) |
| Admin2 | 192.168.10.2 | 255.255.255.0 | 10 (ADMIN) |

---

### 1.9.  Configurar (Docencia Wi-Fi)

Se debe de configurar, el Smartphone (Docencia1), Laptop (Docencia2) y Laptop (Docencia3).

1. Clic en el dispositivo → pestaña Config → Wireless
2. Configurar el SSID igual al que se colocó en el Access Point: NetCore_Docencia
3. Ir a IP Configuration → Static → asignar:

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Docencia1 | 192.168.20.1 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia2 | 192.168.20.2 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia3 | 192.168.20.3 | 255.255.255.0 | 20 (DOCENTES) |

---

### 2.0. Aplicar VTP password (¡AL FINAL!)

Una vez que haya terminado todas las configuraciones de todos los edificios, entrar a cada switch del Edificio A y ejecutar:

```sh
enable
configure terminal
vtp password proyecto12026
end
write memory
exit
```

> ⚠️ Hacerlo en este orden: primero SW-A1, luego SW-A2, luego SW-A3.

---


### 2.1. Verificar que todo funciona

En SW-A1, ejecutar estos comandos y revisar:

Se debe ver: VTP Operating Mode: Server, Domain Name: C7_NetCore:

```sh
show vtp status
```

Se debe ver las 5 VLANs (10, 20, 30, 40, 50) listadas
```sh
show vlan brief
```

Se debe ver que SW-A1 aparece como This bridge is the root:

```sh
show spanning-tree vlan 10
```

Se debe ver Po1 con estado P (bundled) entre SW-A2 y SW-A3:

```sh
show etherchannel summary
```

Se debe ver los puertos troncales activos:

```sh
show interfaces trunk
```

Prueba de conectividad:

1. Ir a Laboratorio2 → Desktop → Command Prompt
2. Escribir: ping 192.168.40.4 (hacia Laboratorio4, misma VLAN)
3. Se debe recibir respuesta ✅
4. Escribir: ping 192.168.10.2 (hacia Admin2, diferente VLAN)
5. No debe responder ✅ (correcto, no hay inter-VLAN routing)

---

## 2. Configuración del edificio B

### 2.1. Habilitar modulos en SW-B1 y SW-B2

#### Módulo GigabitEthernet

Se debe de agregar el módulo GigabitEthernet al SW-B1

1. Hacer doble clic en SW-B1
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el switch — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Arrástralo hacia uno de los slots vacíos del switch (los rectángulos en el cuerpo del dispositivo). Hacerlo 2 veces — una por cada puerto Gigabit que se necesita (uno hacia SW-B3 y otro hacia SW-B4)
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, SW-B1 se tendrá puertos llamados:
GigabitEthernet/8/1
GigabitEthernet/9/1

#### Módulos de fibra al SW-B1

SW-B1 es un Switch-PT y necesita puertos de fibra para conectarse al backbone.

1. Hacer clic sobre SW-B1
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia el backbone)
6. Volver a encender el switch haciendo clic en el botón de poder.

#### Módulos de fibra al SW-B2

SW-B2 es un Switch-PT y necesita puertos de fibra para conectarse al backbone.

1. Hacer clic sobre SW-B2
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia el backbone)
6. Volver a encender el switch haciendo clic en el botón de poder.

---

### 2.2. Tabla de conexiones del Edificio B

| Origen | Puerto origen | Cable | Destino | Puerto destino | Propósito |
|--------|-------------|-------|---------|---------------|-----------|
| SW-A1 | FastEthernet4/1 | **Fiber** | SW-B1 | FastEthernet4/1 | EtherChannel inter-edificios |
| SW-A1 | FastEthernet5/1 | **Fiber** | SW-B1 | FastEthernet5/1 | EtherChannel inter-edificios |
| SW-B1 | FastEthernet6/1 | **Fiber** | SW-B2 | FastEthernet6/1 | EtherChannel B1↔B2 |
| SW-B1 | FastEthernet7/1 | **Fiber** | SW-B2 | FastEthernet7/1 | EtherChannel B1↔B2 |
| SW-B1 | GigabitEthernet8/1 | **Copper Cross-Over** | SW-B3 | GigabitEthernet0/1 | Trunk acceso |
| SW-B1 | GigabitEthernet9/1 | **Copper Cross-Over** | SW-B4 | GigabitEthernet0/1 | Trunk acceso |
| SW-B3 | FastEthernet0/1 | **Copper Cross-Over** | SW-B4 | FastEthernet0/1 | Trunk acceso |
| SW-B2 | FastEthernet0/1 | **Copper Cross-Over** | Hub-B1 | FastEthernet0 | Segmento Legacy |
| Hub-B1 | FastEthernet1 | **Copper Straight-Through** | Biblioteca4 | FastEthernet0 | Acceso |
| Hub-B1 | FastEthernet2 | **Copper Straight-Through** | Biblioteca3 | FastEthernet0 | Acceso |
| Hub-B1 | FastEthernet3 | **Copper Straight-Through** | Biblioteca5 | FastEthernet0 | Acceso |
| SW-B3 | FastEthernet0/2 | **Copper Straight-Through** | PC Biblioteca1 | FastEthernet0 | Acceso |
| SW-B3 | FastEthernet0/3 | **Copper Straight-Through** | Laptop Docencia6 | FastEthernet0 | Acceso |
| SW-B4 | FastEthernet0/2 | **Copper Straight-Through** | Laptop Admin1 | FastEthernet0 | Acceso |
| SW-B4 | FastEthernet0/3 | **Copper Straight-Through** | Laptop Biblioteca2 | FastEthernet0 | Acceso |

---

### 2.3. Configurar SW-B1

Doble clic en SW-B1 → pestaña CLI

#### 2.3.1. Básico

```sh
enable
configure terminal
hostname SW-B1
no ip domain-lookup
```

#### 2.3.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 2.3.3. STP modo PVST

```sh
spanning-tree mode pvst
```

#### 2.3.4. EtherChannel hacia SW-A1 (LACP, inter-edificios, fibra)

```sh
interface range fastEthernet4/1 , fastEthernet5/1
channel-protocol lacp
channel-group 1 mode active
exit

interface port-channel 1
switchport mode trunk
exit
```

#### 2.3.5. EtherChannel hacia SW-B2 (LACP, fibra)

```sh
interface range FastEthernet6/1, FastEthernet7/1
channel-protocol lacp
channel-group 2 mode active
exit

interface port-channel 2
switchport mode trunk
exit
```

#### 2.3.6. Troncal hacia SW-B3

```sh
interface GigabitEthernet8/1
switchport mode trunk
exit
```

#### 2.3.7. Troncal hacia SW-B4

```sh
interface GigabitEthernet9/1
switchport mode trunk
exit
```

#### 2.3.8. Banner MOTD

```sh
banner motd #
Bienvenido a Edificio B - NETCORE_201504070
#
```

#### 2.3.9. Guardar

```sh
end
write memory
exit
```

---

### 2.4. Configurar Configurar SW-B2

Doble clic en SW-B2 → pestaña CLI

#### 2.4.1. Básico

```sh
enable
configure terminal
hostname SW-B2
no ip domain-lookup
```

#### 2.4.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```


#### 2.4.3. STP modo PVST

```sh
spanning-tree mode pvst
```

#### 2.4.4. EtherChannel hacia SW-B1 (LACP, fibra)

```sh
interface range FastEthernet6/1, FastEthernet7/1
channel-protocol lacp
channel-group 2 mode active
exit

interface port-channel 2
switchport mode trunk
exit
```

#### 2.4.5. Puerto hacia Hub-B1 (FastEthernet, modo trunk)

```sh
interface FastEthernet0/1
switchport mode access
switchport access vlan 30
exit
```

Regla importante para recordar:

> 💡 Cualquier dispositivo de capa 1 (Hub, Repeater) que esté conectado a un switch siempre debe conectarse a un puerto access, nunca trunk. Esto aplica también para el Edificio C y D que tienen hubs y repetidores. El hub no entiende etiquetas 802.1Q. Al estar el puerto en modo trunk, los frames llegan etiquetados al hub y los PCs no los pueden procesar. Por eso Biblioteca1 ve las MACs del hub pero el ping falla.

#### 2.4.6. Guardar

```sh
end
write memory
exit
```

---

### 2.5. Configurar SW-B3

Doble clic en SW-B3 → pestaña CLI

#### 2.5.1. Básico

```sh
enable
configure terminal
hostname SW-B3
no ip domain-lookup
```

#### 2.5.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 2.5.3. STP modo PVST

```sh
spanning-tree mode pvst
```

#### 2.5.4. Troncal hacia SW-B1

```sh
interface GigabitEthernet0/1
switchport mode trunk
exit
```

#### 2.5.5. Troncal hacia SW-B4 (FastEthernet)

```sh
interface FastEthernet0/1
switchport mode trunk
exit
```

#### 2.5.6. Puertos de acceso para dispositivos finales

```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 30
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 20
exit
```

#### 2.5.7. Guardar

```sh
end
write memory
exit
```

---

### 2.6. Configurar SW-B4

Doble clic en SW-B4 → pestaña CLI

#### 2.6.1. Básico

```sh
enable
configure terminal
hostname SW-B4
no ip domain-lookup
```

#### 2.6.2. VTP Cliente

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 2.6.3. STP modo PVST

```sh
spanning-tree mode pvst
```

#### 2.6.4. Troncal hacia SW-B1

```sh
interface GigabitEthernet0/1
switchport mode trunk
exit
```

#### 2.6.5. Troncal hacia SW-B3 (FastEthernet)

```sh
interface FastEthernet0/1
switchport mode trunk
exit
```

#### 2.6.6. Puertos de acceso para dispositivos finales

```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 10
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 30
exit
```

#### 2.6.7. Guardar

```sh
end
write memory
exit
```

---

### 2.7. Configuración faltante en SW-A1 — EtherChannel hacia SW-B1

Doble clic en SW-A1 → pestaña CLI

```sh
enable
configure terminal

interface range FastEthernet4/1, FastEthernet5/1
channel-protocol lacp
channel-group 1 mode active
exit

interface port-channel 1
switchport mode trunk
exit

end
write memory
```

Después de agregar esto, se puede verificar en SW-A1 con:

```sh
show etherchannel summary
```

> Se debería ver el Port-Channel 1 con estado SU y los puertos Fa4/1 y Fa5/1 en estado P (bundled), indicando que el EtherChannel está activo entre SW-A1 y SW-B1.

---

### 2.8. Asignar IPs a dispositivos finales

Clic en cada dispositivo → **Desktop** → **IP Configuration** → **Static**

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Biblioteca1 | 192.168.30.1 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca2 | 192.168.30.2 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca3 | 192.168.30.3 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca4 | 192.168.30.4 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca5 | 192.168.30.5 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Admin1 | 192.168.10.1 | 255.255.255.0 | 10 (ADMIN) |
| Docencia6 | 192.168.20.6 | 255.255.255.0 | 20 (DOCENTES) |

---

### 2.9. Configurar contraseña en todos los Switch

Si no se hace esto, entonces las VLAN no se propagana correctamente.

```sh
enable
configure terminal
vtp password proyecto12026
end
write memory
exit
```

---

## 3. Configuración de edificio C

### 3.1. Habilitar modulos en SW-C4

#### Módulo GigabitEthernet

Se debe de agregar el módulo GigabitEthernet al SW-C4

1. Hacer doble clic en SW-C4
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el switch — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Arrástralo hacia uno de los slots vacíos del switch (los rectángulos en el cuerpo del dispositivo). Hacerlo solo 1 vez, solo se necesita un puerto Gigabit para conectar con SW-A1.
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, SW-c4 tendrá un puerto llamado:
GigabitEthernet/8/1

#### Módulos de fibra al SW-C4

SW-C4 es un Switch-PT y necesita puertos de fibra para conectarse al backbone.

1. Hacer clic sobre SW-C4
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia SW-A1)
6. Volver a encender el switch haciendo clic en el botón de poder.

> ⚠️ Si no se apaga el switch antes de agregar módulos, no funcionará.


### 3.2. Tabla de conexiones del Edificio C

| Origen | Puerto origen | Cable | Destino | Puerto destino | Propósito |
|--------|-------------|-------|---------|---------------|-----------|
| SW-A1 | FastEthernet6/1 | **Fiber** | SW-C4 | FastEthernet6/1 | EtherChannel inter-edificios |
| SW-A1 | FastEthernet7/1 | **Fiber** | SW-C4 | FastEthernet7/1 | EtherChannel inter-edificios |
| SW-C4 | GigabitEthernet8/1 | **Copper Cross-Over** | Hub-C1 | GigabitEthernet7 |  |
| Hub-C1 | FastEthernet0 | **Copper Cross-Over** | SW-C1 | FastEthernet0/1 | Distribución hacia hub |
| Hub-C1 | FastEthernet1 | **Copper Cross-Over** | SW-C2 | FastEthernet0/1 | Acceso |
| Hub-C1 | FastEthernet2 | **Copper Cross-Over** | SW-C3 | FastEthernet0/1 | Acceso |
| SW-C2 | FastEthernet0/2 | **Copper Straight-Through** | Laptop Docencia7 | FastEthernet0 | Acceso VLAN 20 |
| SW-C2 | FastEthernet0/3 | **Copper Straight-Through** | PC Docencia8 | FastEthernet0 | Acceso VLAN 20 |
| SW-C1 | FastEthernet1/1 | **Copper Straight-Through** | PC Docencia9 | FastEthernet0 | Acceso VLAN 20 |
| SW-C3 | FastEthernet0/2 | **Copper Straight-Through** | PC Biblioteca6 | FastEthernet0 | Acceso VLAN 30 |
| SW-C3 | FastEthernet0/3 | **Copper Straight-Through** | PC Admin3 | FastEthernet0 | Acceso VLAN 10 |

---

### 3.3. Configurar SW-C4 (Switch-PT)

Doble clic en SW-C4 → pestaña CLI.

### 3.3.1 Nombre y configuración básica

```sh
enable
configure terminal
hostname SW-C4
no ip domain-lookup
```

#### 3.3.2. Modo VTP Server y dominio

```sh
vtp mode client
vtp domain C7_NetCore
```

#### 3.3.3. Spanning Tree (carnet par = PVST)

```sh
spanning-tree mode pvst
```

#### 3.3.4. EtherChannel inter-edificios con SW-A1 (LACP, fibra)

```sh
interface range FastEthernet6/1, FastEthernet7/1
channel-protocol lacp
channel-group 1 mode active
no shutdown
exit
interface port-channel 1
switchport mode trunk
exit
```

#### 3.3.5. Puerto hacia Hub-C1 en modo trunk

```sh
interface GigabitEthernet8/1
switchport mode trunk
no shutdown
exit
```

#### 3.3.6. Banner MOTD

```sh
banner motd #
Bienvenido a Edificio C - NETCORE_201504070 
#
exit
```

#### 3.3.7. Guardar

```sh
end
write memory
exit
```

---

### 3.4. Configurar SW-C1 (Switch-PT)
Doble clic en SW-C1 → pestaña CLI.

#### 3.4.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-C1
no ip domain-lookup
```

#### 3.4.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 3.4.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 3.4.4. Puerto uplink hacia Hub-C1 en modo trunk
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 3.4.5. Puerto de acceso — PC Docencia9 (VLAN 20)
```sh
interface FastEthernet1/1
switchport mode access
switchport access vlan 20
no shutdown
exit
```

#### 3.4.6. Guardar
```sh
end
write memory
exit
```

---

### 3.5. Configurar SW-C2 (2960-24TT)
Doble clic en SW-C2 → pestaña CLI.

#### 3.5.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-C2
no ip domain-lookup
```

#### 3.5.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 3.5.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 3.5.4. Puerto uplink hacia Hub-C1 en modo trunk
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 3.5.5. Puertos de acceso — Docencia7 y Docencia8 (VLAN 20)
```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 20
no shutdown
exit
interface FastEthernet0/3
switchport mode access
switchport access vlan 20
no shutdown
exit
```

#### 3.5.6. Guardar
```sh
end
write memory
exit
```

---

### 3.6. Configurar SW-C3 (2960-24TT)
Doble clic en SW-C3 → pestaña CLI.

#### 3.6.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-C3
no ip domain-lookup
```

#### 3.6.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 3.6.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 3.6.4. Puerto uplink hacia Hub-C1 en modo trunk
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 3.6.5. Puertos de acceso — Biblioteca6 (VLAN 30) y Admin3 (VLAN 10)
```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 30
no shutdown
exit
interface FastEthernet0/3
switchport mode access
switchport access vlan 10
no shutdown
exit
```

#### 3.6.6. Guardar
```sh
end
write memory
exit
```

---

#### 3.7. Configuración faltante en SW-A1 — EtherChannel hacia SW-B1

Doble clic en SW-A1 → pestaña CLI.

```sh
enable
configure terminal
interface range FastEthernet6/1, FastEthernet7/1
channel-protocol lacp
channel-group 2 mode active
exit
interface port-channel 2
switchport mode trunk
exit
end
write memory
exit
```

Después de agregar esto, se puede verificar en SW-A1 con:

```sh
show etherchannel summary
```

> Se debería ver el Port-Channel 2 con estado SU y los puertos Fa6/1 y Fa7/1 en estado P (bundled), indicando que el EtherChannel está activo entre SW-A1 y SW-C4.

### 3.8. Asignar IPs a dispositivos finales

Clic en cada dispositivo → **Desktop** → **IP Configuration** → **Static**

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Docencia7 | 192.168.20.7 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia8 | 192.168.20.8 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia9 | 192.168.20.9 | 255.255.255.0 | 20 (DOCENTES) |
| Biblioteca6 | 192.168.30.6 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Admin3 | 192.168.10.3 | 255.255.255.0 | 10 (ADMIN) |

---

### 3.9. Contraseña VTP — aplicar al final en todos los switches del Edificio C
Ejecutar en SW-C4, SW-C1, SW-C2 y SW-C3:
```sh
enable
configure terminal
vtp password proyecto12026
exit
write memory
exit
```

---

### 3.10. Recordatorio sobre Hub-C1

> El hub no se configura, solo se conecta. Su función es repetir señales eléctricamente, creando un único dominio de colisión entre SW-C4, SW-C1, SW-C2 y SW-C3, que es precisamente lo que el enunciado busca demostrar sobre el comportamiento de capa física.

---

## 4. Configuración del edificio D

### 4.1. Habilitar modulos

#### Módulos de fibra al SW-D5

SW-D5 es un Switch-PT y necesita puertos de fibra para conectarse a SW-B2.

1. Hacer clic sobre SW-D5
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia SW-B2)
6. Volver a encender el switch haciendo clic en el botón de poder.

#### Módulo GigabitEthernet al SW-D5

Se debe de agregar el módulo GigabitEthernet al SW-D5

1. Hacer doble clic en SW-D5
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el switch — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Arrástralo hacia uno de los slots vacíos del switch (los rectángulos en el cuerpo del dispositivo). Hacerlo 1 vez ya que se necesita sólo 1 puerto Gigabit (hacia SW-D4)
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, SW-D5 se tendrá 1 puerto llamado:
GigabitEthernet/8/1

#### Módulos de fibra al SW-D1

SW-D1 es un Switch-PT y necesita puertos de fibra para conectarse a SW-C4.

1. Hacer clic sobre SW-D1
2. Ir a la pestaña Physical (arriba del todo en la ventana que se abre)
3. Buscar el botón de encendido (el círculo verde a la derecha del switch) y hacer clic para apagarlo — debe quedar gris/apagado
4. En el panel de la izquierda hay varios módulos disponibles. Buscar PT-SWITCH-NM-1FFE
5. Arrastrar ese módulo a uno de los slots vacíos del switch (los rectángulos vacíos en el cuerpo del switch). Hacerlo 2 veces (se necesitan 2 puertos FFE para el EtherChannel hacia SW-C4)
6. Volver a encender el switch haciendo clic en el botón de poder.

#### Módulo GigabitEthernet al SW-D2

Se debe de agregar el módulo GigabitEthernet al SW-D2

1. Hacer doble clic en SW-D1
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el switch — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Arrástralo hacia uno de los slots vacíos del switch (los rectángulos en el cuerpo del dispositivo). Hacerlo solo 1 vez, solo se necesita un puerto Gigabit para conectar con SW-D5.
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, SW-c4 tendrá un puerto llamado:
GigabitEthernet/8/1

#### Módulo GigabitEthernet al AC-D1 (Access point)

Se debe de agregar el módulo GigabitEthernet al AC-D1

1. Hacer doble clic en AC-D1
2. Ir a la pestaña Physical
3. Buscar el botón de encendido y apagar el access point — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada
4. En el panel izquierdo donde dice MODULES, buscar el módulo llamado:
PT-SWITCH-NM-1CGE
5. Retirar el único módulo que trae el acces point PT.
6. Arrástrar el módulo PT-SWITCH-NM-1CGE hacia el slots vacío del switch (el rectángulo en el cuerpo del dispositivo). 
6. Encender el switch nuevamente
7. Ahora cuando se vaya a conectar, AC-D1 su único puerto será GigabitEthernet.

#### Configurar AC-D1 (Acces Point PT)

1. Hacer doble clic en AC-D1
2. Ir a la pestaña Port1
3. En SSID renombrar a "NetCore_Visitantes"

### Configurar PC de visitantes

1. Hacer doble clic en una de las PC.
2. Buscar el botón de encendido y apagar en la PC — debe quedar así:
[ botón ] ← clic aquí hasta que la luz quede apagada.
3. Retirar en el slot de red el módulo que trae por defecto.
4. Colocar el módulo WMP300N.
5. Encender el PC nuevamente.
6. Ir a la pestaña Config.
7. En la columna de la izquierda buscar la pestaña Wireless0 y dar Click.
8. Donde dice SSID colocar "NetCore_Visitantes".

> Repetir este proceso para cada una de las 3 PC de visitantes.

---

### 4.2. Tabla de conexiones del Edificio D

| Origen | Puerto origen | Cable | Destino | Puerto destino | Propósito |
|--------|-------------|-------|---------|---------------|-----------|
| SW-B2 | FastEthernet4/1 | **Fiber** | SW-D5 | FastEthernet4/1 | EtherChannel inter-edificios (Edificio B ↔ D) |
| SW-B2 | FastEthernet5/1 | **Fiber** | SW-D5 | FastEthernet5/1 | EtherChannel inter-edificios (Edificio B ↔ D) |
| SW-C4 | FastEthernet4/1 | **Fiber** | SW-D1 | FastEthernet4/1 | EtherChannel inter-edificios (Edificio C ↔ D) |
| SW-C4 | FastEthernet5/1 | **Fiber** | SW-D1 | FastEthernet5/1 | EtherChannel inter-edificios (Edificio C ↔ D) |
| SW-D1 | FastEthernet6/1 | **Fiber** | SW-D5 | FastEthernet6/1 | Trunk intra-edificio fibra OM3 (redundancia D1↔D5) |
| SW-D5 | GigabitEthernet7/1 | **Copper Cross-Over** | SW-D2 | GigabitEthernet7/1 | Trunk distribución hacia SW-D2 |
| SW-D2 | FastEthernet0/1 | **Copper Cross-Over** | SW-D4 | FastEthernet0/1 | Trunk acceso hacia switch SW-D4 |
| SW-D2 | FastEthernet1/1 | **Copper Cross-Over** | Repetidor-D1 | Ethernet0 | Extensión física de medio hacia SW-D3 |
| Repetidor-D1 | Ethernet1 | **Copper Cross-Over** | SW-D3 | FastEthernet0/1 | Extensión física de medio hacia SW-D3 |
| SW-D1 | FastEthernet0/1 | **Copper Cross-Over** | SW-E1 | FastEthernet0/1 | Trunk hacia switch transparente VTP (área visitantes) |
| SW-E1 | FastEthernet0/2 | **Copper Cross-Over** | SW-D2 | FastEthernet2/1 | Trunk hacia distribución SW-D2 |
| AC-D1 | Port0 | **Copper Straight-Through** | SW-E1 | GigabitEthernet0/1 | Enlace AP ↔ switch para acceso inalámbrico visitantes |
| SW-D4 | FastEthernet0/2 | **Copper Straight-Through** | PC Biblioteca7 | FastEthernet0 | Acceso VLAN 30 (BIBLIOTECA) |
| SW-D4 | FastEthernet0/3 | **Copper Straight-Through** | PC Laboratorio3 | FastEthernet0 | Acceso VLAN 40 (LABORATORIO) |
| SW-D3 | FastEthernet0/2 | **Copper Straight-Through** | PC Admin4 | FastEthernet0 | Acceso VLAN 10 (ADMIN) |
| SW-D3 | FastEthernet0/3 | **Copper Straight-Through** | PC Admin5 | FastEthernet0 | Acceso VLAN 10 (ADMIN) |
| SW-D3 | FastEthernet0/4 | **Copper Straight-Through** | Server Docencia10 | FastEthernet0 | Acceso VLAN 20 (DOCENTES) |
| AC-D1 | Wireless | **Wireless** | PC Visitantes1 | Wireless | Acceso inalámbrico VLAN 50 (VISITANTE) |
| AC-D1 | Wireless | **Wireless** | PC Visitantes2 | Wireless | Acceso inalámbrico VLAN 50 (VISITANTE) |
| AC-D1 | Wireless | **Wireless** | PC Visitantes3 | Wireless | Acceso inalámbrico VLAN 50 (VISITANTE) |

---

###  4.3. Asignar IPs a dispositivos finales

Clic en cada dispositivo → **Desktop** → **IP Configuration** → **Static**

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Admin4 | 192.168.10.4 | 255.255.255.0 | 10 (ADMIN) |
| Admin5 | 192.168.10.5 | 255.255.255.0 | 10 (ADMIN) |
| Docencia10 | 192.168.20.10 | 255.255.255.0 | 20 (DOCENTES) |
| Biblioteca7 | 192.168.30.7 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Laboratorio3 | 192.168.40.3 | 255.255.255.0 | 40 (LABORATORIO) |
| Visitantes1 | 192.168.50.1 | 255.255.255.0 | 50 (VISITANTE) |
| Visitantes2 | 192.168.50.2 | 255.255.255.0 | 50 (VISITANTE) |
| Visitantes3 | 192.168.50.3 | 255.255.255.0 | 50 (VISITANTE) |

> El campo **Default Gateway** se deja vacío. No existe enrutamiento inter-VLAN (capa 2 únicamente).

---

### 4.4. Configurar SW-D1 (Switch-PT)

Doble clic en SW-D1 → pestaña CLI.

#### 4.4.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-D1
no ip domain-lookup
```

#### 4.4.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 4.4.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.4.4. EtherChannel inter-edificios hacia SW-C4 (LACP, fibra)
```sh
interface range FastEthernet4/1, FastEthernet5/1
channel-protocol lacp
channel-group 1 mode active
no shutdown
exit
interface port-channel 1
switchport mode trunk
exit
```

#### 4.4.5. Trunk intra-edificio hacia SW-D5 (fibra OM3)
```sh
interface FastEthernet6/1
switchport mode trunk
no shutdown
exit
```

#### 4.4.6. Puerto trunk hacia SW-E1
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.4.7. Banner MOTD
```sh
banner motd #
Bienvenido a Edificio D - NETCORE_201504070
#
exit
```

#### 4.4.8. Guardar
```sh
end
write memory
exit
```

---

### 4.5. Configurar SW-D5 (Switch-PT)

Doble clic en SW-D5 → pestaña CLI.

#### 4.5.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-D5
no ip domain-lookup
```

#### 4.5.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 4.5.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.5.4. EtherChannel inter-edificios hacia SW-B2 (LACP, fibra)
```sh
interface range FastEthernet4/1, FastEthernet5/1
channel-protocol lacp
channel-group 1 mode active
no shutdown
exit
interface port-channel 1
switchport mode trunk
exit
```

#### 4.5.5. Trunk intra-edificio hacia SW-D1 (fibra OM3)
```sh
interface FastEthernet6/1
switchport mode trunk
no shutdown
exit
```

#### 4.5.6. Puerto trunk hacia SW-D2 (GigabitEthernet)
```sh
interface GigabitEthernet7/1
switchport mode trunk
no shutdown
exit
```

#### 4.5.7. Guardar
```sh
end
write memory
exit
```

---

### 4.6. Configurar SW-D2 (Switch-PT)

Doble clic en SW-D2 → pestaña CLI.

#### 4.6.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-D2
no ip domain-lookup
```

#### 4.6.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 4.6.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.6.4. Puerto trunk hacia SW-D5 (GigabitEthernet)
```sh
interface GigabitEthernet7/1
switchport mode trunk
no shutdown
exit
```

#### 4.6.5. Puerto trunk hacia SW-D4
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.6.6. Puerto hacia Repetidor-D1 (extensión física hacia SW-D3)
```sh
interface FastEthernet1/1
switchport mode trunk
no shutdown
exit
```

#### 4.6.7. Puerto trunk hacia SW-E1
```sh
interface FastEthernet2/1
switchport mode trunk
no shutdown
exit
```

#### 4.6.8. Guardar
```sh
end
write memory
exit
```

---

### 4.7. Configurar SW-E1 (2960-24TT) — VTP Transparente

Doble clic en SW-E1 → pestaña CLI.

#### 4.7.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-E1
no ip domain-lookup
```

#### 4.7.2. Modo VTP Transparente y dominio
```sh
vtp mode transparent
vtp domain C7_NetCore
```

> SW-E1 opera en modo **transparente**: reenvía tramas VTP sin procesarlas y mantiene su propia base de VLANs local.

#### 4.7.3. VLAN local de visitantes
```sh
vlan 50
name VISITANTE
exit
```

#### 4.7.4. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.7.5. Puerto trunk hacia SW-D1
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.7.6. Puerto trunk hacia SW-D2
```sh
interface FastEthernet0/2
switchport mode trunk
no shutdown
exit
```

#### 4.7.7. Puerto hacia AC-D1 (Access Point) en modo trunk
```sh
interface GigabitEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.7.8. Banner MOTD
```sh
banner motd #
Bienvenido a Edificio D Visitantes - NETCORE_201504070
#
exit
```

#### 4.7.9. Guardar
```sh
end
write memory
exit
```

---

### 4.8. Configurar SW-D4 (2960-24TT)

Doble clic en SW-D4 → pestaña CLI.

#### 4.8.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-D4
no ip domain-lookup
```

#### 4.8.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 4.8.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.8.4. Puerto trunk hacia SW-D2
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.8.5. Puertos de acceso
```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 30
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 40
no shutdown
exit
```

#### 4.8.6. Guardar
```sh
end
write memory
exit
```

---

### 4.9. Configurar SW-D3 (2960-24TT)

Doble clic en SW-D3 → pestaña CLI.

#### 4.9.1. Nombre y configuración básica
```sh
enable
configure terminal
hostname SW-D3
no ip domain-lookup
```

#### 4.9.2. Modo VTP Client y dominio
```sh
vtp mode client
vtp domain C7_NetCore
```

#### 4.9.3. Spanning Tree (carnet par = PVST)
```sh
spanning-tree mode pvst
```

#### 4.9.4. Puerto trunk hacia Repetidor-D1
```sh
interface FastEthernet0/1
switchport mode trunk
no shutdown
exit
```

#### 4.9.5. Puertos de acceso
```sh
interface FastEthernet0/2
switchport mode access
switchport access vlan 10
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 10
no shutdown
exit

interface FastEthernet0/4
switchport mode access
switchport access vlan 20
no shutdown
exit
```

#### 4.9.6. Guardar
```sh
end
write memory
exit
```
---

### 4.10. Contraseña VTP — aplicar al final en todos los switches del Edificio D

Ejecutar en **SW-D1, SW-D5, SW-D2, SW-D3, SW-D4 y SW-E1**:
```sh
enable
configure terminal
vtp password proyecto12026
exit
write memory
exit
```

### 4.11. EtherChannel inter-edificios de SW-C4 hacia SW-D1 (LACP, fibra)

Doble clic en SW-C4 → pestaña CLI.

```sh
enable
configure terminal
interface range FastEthernet4/1, FastEthernet5/1
channel-protocol lacp
channel-group 2 mode active
no shutdown
exit
interface port-channel 2
switchport mode trunk
exit
end
write memory
```

---


### 4.12. EtherChannel inter-edificios de SW-B2 hacia SW-D5 (LACP, fibra)

Doble clic en SW-B2 → pestaña CLI.

#### EtherChannel inter-edificios hacia SW-D5 (LACP, fibra)
```sh
enable
configure terminal
interface range FastEthernet4/1, FastEthernet5/1
channel-protocol lacp
channel-group 3 mode active
no shutdown
exit
interface port-channel 3
switchport mode trunk
exit
end
write memory
```

---

## 5. Verificar funcionamiento

Para verificar que todo este funcionando se puede usar:

```sh
arp -a
show spanning-tree
show etherchannel summary
show interfaces trunk
show vlan brief
show ip interface brief
show interfaces FastEthernet0/1 switchport

```

---

# Tabla de IPs asignadas por cada dispositivo

| Dispositivo | IP | Máscara | VLAN |
|------------|-----|---------|------|
| Admin1 | 192.168.10.1 | 255.255.255.0 | 10 (ADMIN) |
| Admin2 | 192.168.10.2 | 255.255.255.0 | 10 (ADMIN) |
| Admin3 | 192.168.10.3 | 255.255.255.0 | 10 (ADMIN) |
| Admin4 | 192.168.10.4 | 255.255.255.0 | 10 (ADMIN) |
| Admin5 | 192.168.10.5 | 255.255.255.0 | 10 (ADMIN) |
| Docencia1 | 192.168.20.1 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia2 | 192.168.20.2 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia3 | 192.168.20.3 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia6 | 192.168.20.6 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia7 | 192.168.20.7 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia8 | 192.168.20.8 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia9 | 192.168.20.9 | 255.255.255.0 | 20 (DOCENTES) |
| Docencia10 | 192.168.20.10 | 255.255.255.0 | 20 (DOCENTES) |
| Biblioteca1 | 192.168.30.1 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca2 | 192.168.30.2 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca3 | 192.168.30.3 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca4 | 192.168.30.4 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca5 | 192.168.30.5 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca6 | 192.168.30.6 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Biblioteca7 | 192.168.30.7 | 255.255.255.0 | 30 (BIBLIOTECA) |
| Laboratorio2 | 192.168.40.2 | 255.255.255.0 | 40 (LABORATORIO) |
| Laboratorio3 | 192.168.40.3 | 255.255.255.0 | 40 (LABORATORIO) |
| Laboratorio4 | 192.168.40.4 | 255.255.255.0 | 40 (LABORATORIO) |
| Visitantes1 | 192.168.50.1 | 255.255.255.0 | 50 (VISITANTE) |
| Visitantes2 | 192.168.50.2 | 255.255.255.0 | 50 (VISITANTE) |
| Visitantes3 | 192.168.50.3 | 255.255.255.0 | 50 (VISITANTE) |

---


# Tabla de VLANs con su ID y Nombre

| VLAN ID | Nombre        |
|----------|--------------|
| 10       | ADMIN        |
| 20       | DOCENTES     |
| 30       | BIBLIOTECA   |
| 40       | LABORATORIO  |
| 50       | VISITANTE    |

---

# Pruebas de ping: 2 por VLAN (1 exitoso + 1 fallido = 10 en total)

| VLAN        | IP a conectar    | Prueba Exitosa                    | IP a conectar    | Prueba Fallida                    |
| ----------- | ---------------- | --------------------------------- | ---------------- | --------------------------------- |
| ADMIN       |   192.168.10.1   | PC Admin4 → PC Admin1             |   192.168.20.8   | PC Admin4 → PC Docencia8          |
| DOCENTES    |   192.168.20.9   | Laptop Docencia7 → PC Docencia9   |   192.168.30.6   | Laptop Docencia7 → PC Biblioteca6 |
| BIBLIOTECA  |   192.168.30.3   | PC Biblioteca6 → Biblioteca3      |   192.168.40.2   | PC Biblioteca6 → PC Laboratorio2  |
| LABORATORIO |   192.168.40.3   | PC Laboratorio2 → PC Laboratorio3 |   192.168.10.2   | PC Laboratorio2 → PC Admin2       |
| VISITANTE   |   192.168.50.2   | PC Visitantes1 → PC Visitantes2   |   192.168.10.3   | PC Visitantes1 → PC Admin3        |

## Prueba de ping 1

- Exitoso: PC Admin4 → PC Admin1 → 192.168.10.1
- Fallido: PC Admin4 → PC Docencia8 → 192.168.20.8

<div align="center">
  <img src="img/ping1.jpg" alt="" width="50%">
</div>

## Prueba de ping 2

- Exitoso: Laptop Docencia7 → PC Docencia9 → 192.168.20.9
- Fallido: Laptop Docencia7 → PC Biblioteca6 → 192.168.30.6

<div align="center">
  <img src="img/ping2.jpg" alt="" width="50%">
</div>

## Prueba de ping 3

- Exitoso: PC Biblioteca6 → Biblioteca3 → 192.168.30.3
- Fallido:PC Biblioteca6 → PC Laboratorio2 → 192.168.20.8

<div align="center">
  <img src="img/ping3.jpg" alt="" width="50%">
</div>

## Prueba de ping 4

- Exitoso: PC Laboratorio2 → PC Laboratorio3 → 192.168.40.3
- Fallido: PC Laboratorio2 → PC Admin2 → 192.168.10.2

<div align="center">
  <img src="img/ping4.jpg" alt="" width="50%">
</div>

---

## Prueba de ping 5

- Exitoso: PC Visitantes1 → PC Visitantes2 → 192.168.50.2
- Fallido: PC Visitantes1 → PC Admin3 → 192.168.10.3

<div align="center">
  <img src="img/ping5.jpg" alt="" width="50%">
</div>

---

# Capturas de show 

## show spanning-tree

### SW-A1

<div align="center">
  <img src="img/sw1.jpg" alt="" width="50%">
</div>

### SW-B1

<div align="center">
  <img src="img/sw2.jpg" alt="" width="50%">
</div>

### SW-B2

<div align="center">
  <img src="img/sw3.jpg" alt="" width="50%">
</div>

### SW-C4

<div align="center">
  <img src="img/sw4.jpg" alt="" width="50%">
</div>

### SW-D1

<div align="center">
  <img src="img/sw5.jpg" alt="" width="50%">
</div>

### SW-D5

<div align="center">
  <img src="img/sw6.jpg" alt="" width="50%">
</div>

## show etherchannel summary

### SW-A1

<div align="center">
  <img src="img/sw7.jpg" alt="" width="50%">
</div>

### SW-B1

<div align="center">
  <img src="img/sw8.jpg" alt="" width="50%">
</div>

### SW-B2

<div align="center">
  <img src="img/sw9.jpg" alt="" width="50%">
</div>

### SW-C4

<div align="center">
  <img src="img/sw10.jpg" alt="" width="50%">
</div>

### SW-D1

<div align="center">
  <img src="img/sw11.jpg" alt="" width="50%">
</div>

### SW-D5

<div align="center">
  <img src="img/sw12.jpg" alt="" width="50%">
</div>

### SW-A2

<div align="center">
  <img src="img/sw13.jpg" alt="" width="50%">
</div>

### SW-A3

<div align="center">
  <img src="img/sw14.jpg" alt="" width="50%">
</div>

## show interfaces trunk

### SW-A1

<div align="center">
  <img src="img/sw15.jpg" alt="" width="50%">
</div>

### SW-B1

<div align="center">
  <img src="img/sw16.jpg" alt="" width="50%">
</div>

### SW-B2

<div align="center">
  <img src="img/sw17.jpg" alt="" width="50%">
</div>

### SW-C4

<div align="center">
  <img src="img/sw18.jpg" alt="" width="50%">
</div>

### SW-D1

<div align="center">
  <img src="img/sw19.jpg" alt="" width="50%">
</div>

### SW-D5

<div align="center">
  <img src="img/sw20.jpg" alt="" width="50%">
</div>

### SW-A2

<div align="center">
  <img src="img/sw21.jpg" alt="" width="50%">
</div>

### SW-A3

<div align="center">
  <img src="img/sw22.jpg" alt="" width="50%">
</div>


---

# 📊 Presupuesto estimado de equipos

## 🔹 Switches Cisco 2960-24TT

### 📍 Edificio A

* SW-A1
* SW-A2
* SW-A3
  ➡ **3 switches**

### 📍 Edificio B

* SW-B1
* SW-B2
* SW-B3
* SW-B4
  ➡ **4 switches**

### 📍 Edificio C

* SW-C1
* SW-C2
* SW-C3
* (SW-C4 es Switch-PT según enunciado)
  ➡ **3 Cisco 2960**

### 📍 Edificio D

* SW-D2
* SW-D3
* SW-D4
* SW-E1
  ➡ **4 Cisco 2960**

---

### 🔢 Total Cisco 2960-24TT =

3 + 4 + 3 + 4 = **14 switches**

---

## 🔹 Switch-PT (simulados equivalentes físicos)

* SW-C4
* SW-D1
* SW-D5

➡ **3 switches tipo agregación con módulos de fibra**

---

# 📡 2️⃣ Cálculo de módulos de fibra (PT-SWITCH-NM-1FFE)

Cada enlace de fibra usa:

* 2 módulos (uno por cada extremo)

---

## 🔹 Enlaces de fibra identificados

1. A1 ↔ B1 (2 fibras EtherChannel)
2. A1 ↔ C4 (2 fibras)
3. C4 ↔ D1 (2 fibras)
4. D5 ↔ B2 (2 fibras)
5. B1 ↔ B2 (2 fibras)
6. D5 ↔ D1 (1 fibra redundante)

---

### 🔢 Total enlaces físicos de fibra:

2 + 2 + 2 + 2 + 2 + 1 = **11 enlaces de fibra**

Cada enlace necesita 2 módulos:

11 × 2 = **22 módulos PT-SWITCH-NM-1FFE**

---

# 🔌 3️⃣ Cálculo de Cableado UTP

Dividimos por tipo:

---

## 🔹 🔹 UTP Cat6 (Distribución / Troncales Gigabit)

Usado en:

* Trunks entre switches dentro del edificio
* Enlaces GigabitEthernet

Contando de tablas:

Edificio A → 2 trunks
Edificio B → 3 trunks
Edificio C → 4 enlaces hacia hub
Edificio D → 6 enlaces troncales internos

Aproximadamente: **15 enlaces Cat6**

---

## 🔹 🔹 UTP Cat5e (Acceso a usuarios)

Contando todos los dispositivos finales cableados:

Edificio A → 3 PCs
Edificio B → 6 dispositivos
Edificio C → 5 dispositivos
Edificio D → 6 dispositivos

Total = **20 cables de acceso Cat5e**

---

# 🌐 4️⃣ Cable de Fibra Óptica OM3

Tenemos:

* 11 enlaces físicos
* Cada enlace requiere 1 patch cord dúplex OM3

➡ **11 cables de fibra OM3 dúplex**

---

# 🔗 5️⃣ Conectores necesarios

## 🔹 Para UTP

Cada cable requiere 2 conectores RJ-45:

(15 + 20) cables = 35 cables
35 × 2 = **70 conectores RJ-45**

---

## 🔹 Para fibra

Cada enlace dúplex necesita conectores LC-LC (normalmente ya vienen integrados en el patch cord).

➡ **11 pares LC-LC**

---

# 💰 6️⃣ Presupuesto estimado (valores aproximados reales de mercado)

| Equipo                                   | Cantidad | Precio Unitario (USD) | Subtotal |
| ---------------------------------------- | -------- | --------------------- | -------- |
| Cisco 2960-24TT                          | 14       | $250                  | $3,500   |
| Switch agregación (equivalente L2 fibra) | 3        | $300                  | $900     |
| Módulo fibra PT-SWITCH-NM-1FFE           | 22       | $40                   | $880     |
| Cable UTP Cat6 (15)                      | 15       | $8                    | $120     |
| Cable UTP Cat5e (20)                     | 20       | $5                    | $100     |
| Fibra OM3 dúplex (11)                    | 11       | $25                   | $275     |
| Conectores RJ45 (70)                     | 70       | $0.50                 | $35      |

---

## 💵 TOTAL ESTIMADO ≈ **$5,810 USD**

---

