// Módulo para registrar nuevas tareas en el servidor
export const crearTarea = async (urlBase, nuevaTarea, callbackRefrescar) => {
    try {
        // Configuramos la petición POST con cabeceras y cuerpo
        const respuesta = await fetch(`${urlBase}/tareas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevaTarea)
        });

        // Verificamos si el recurso fue creado exitosamente
        if (respuesta.ok) {
            console.log("Tarea registrada con éxito en la base de datos.");
            // Ejecutamos el callback para actualizar la interfaz gráfica
            callbackRefrescar(); 
        } else {
            console.error("El servidor rechazó la creación de la tarea.");
        }
    } catch (error) {
        console.error("Error de conexión al intentar crear:", error);
    }
};