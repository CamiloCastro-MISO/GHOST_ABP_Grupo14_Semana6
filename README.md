# GHOST_ABP_Grupo14_Semana6
Repositorio para alojamiento de pruebas E2E

### Grupo 14
Semana 6

### Integrantes del equipo:

Bryan Camilo Castro ([bc.castro@uniandes.edu.co](mailto:bc.castro@uniandes.edu.co))

Luis Alberto Mendoza Hernández ([l.mendozah@uniandes.edu.co](mailto:l.mendozah@uniandes.edu.co))

Hernán David Martínez Domínguez ([hd.martinezd1@uniandes.edu.co](mailto:hd.martinezd1@uniandes.edu.co))
_________________
## Tutorial Entrega Semana 6 Ghost - Pruebas Automatizadas de Software
_________________

### Video de ejecución de las pruebas

A continuación, usted encontrará un enlace a un video con el paso a paso completo desde cero para la correcta ejecución de los tests, en Cypress, en caso tal de necesitar detalles adicionales sobre cómo ejecutar las pruebas:

### Video toma de capturas de pantalla

A continuación, usted encontrará un enlace a un video con el procedimiento realizado en la semana para habilitar la toma de capturas de pantalla, las decisiones tomadas respecto a la construcción del reporte y breve explicación de los resultados obtenidos en la semana:


______________
## Paso a paso para ejecutar las pruebas

A continuación, usted encontrará una guía con los pasos necesarios para poder ejecutar exitosamente las pruebas de la aplicacion Ghost: 

1. Clone el repositorio encontrado en https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14_Semana6. Para esto, puede usar el comando: 
    ```bash
    git clone https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14](https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14_Semana6.git
    ```
   

### Para ejecutar las pruebas con Cypress:

**Requisitos:**

**Nota:** existen dos versiones instaladas en EC2 de AWS:

http://54.172.114.8:2368/ghost/#/signin -- **5.74**
</br>
http://52.91.116.86:2368/ghost/#/signin -- **6.0 Estilos Modificados**


**Es necesario tener instalado Python.**

Una vez cumpla con estos requisitos:

1. Instale ***nodeenv*** dentro del entorno virtual utilizando pip:

```powershell
pip install nodeenv
```

2. Active el ambiente virtual:

```powershell
.\venv_cypress\Scripts\activate
```

3. Ubíquese en la carpeta que contiene las pruebas de Cypress:

```powershell
cd .\CYPRESS\
```

4. Instale los paquetes:

```powershell
npm install
```

## Existen varios tipos de test para esta entrega, por tal motivo le enunciamos los pasos necesarios para ello.

## Nota: por favor ejecute las pruebas en el orden que se mencionan en el tutorial.

**10 escenarios de prueba para generar un reporte compartivo**

Ejecute el siguiente comando para correr los tests:

```powershell
escenario10-cypress
```

**10 escenarios de prueba para generar un reporte compartivo en la nueva versión de ghost**

Ejecute el siguiente comando para correr los tests:

```powershell
escenario10-cypress-modified
```
**Generar Reporte HTML**
Ejecute el siguiente comando para crear el reporte:

```powershell
npx cypress run
```

**40 escenarios de prueba de la semana pasada modificados para la toma de screenshots**

Ejecute el siguiente comando para correr los tests:

```powershell
escenario40-cypress
```

**40 escenarios de prueba de la semana pasada modificados para la toma de screenshots en la nueva versión de ghost**

Ejecute el siguiente comando para correr los tests:

```powershell
escenario40-cypress-modified
```

