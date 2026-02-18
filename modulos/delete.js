// Módulo para eliminar recursos del servidor
export const eliminarTarea = async (urlBase, id, callbackRefrescar) => {
    // Solicitamos confirmación al usuario para prevenir borrados accidentales
    const confirmacion = confirm("¿Está seguro de que desea eliminar esta tarea permanentemente?");
    
    if (!confirmacion) return; // Cancelamos la operación si el usuario desiste

    try {
        // Enviamos la petición DELETE al recurso específico por su ID
        const respuesta = await fetch(`${urlBase}/tareas/${id}`, {
            method: "DELETE"
        });

        if (respuesta.ok) {
            console.log(`Tarea ID: ${id} eliminada exitosamente.`);
            // Actualizamos la vista eliminando el elemento del DOM
            callbackRefrescar();
        } else {
            console.error("Error: No se pudo eliminar la tarea en el servidor.");
        }
    } catch (error) {
        console.error("Fallo de conexión al intentar eliminar:", error);
    }
};