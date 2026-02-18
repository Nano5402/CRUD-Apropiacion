export const actualizarTarea = async (urlBase, id, nuevosDatos, callbackRefrescar) => {
    try {
        const respuesta = await fetch(`${urlBase}/tareas/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevosDatos)
        });

        if (respuesta.ok) {
            console.log(`Tarea ${id} actualizada.`);
            callbackRefrescar();
        } else {
            console.error("Error al actualizar en el servidor.");
        }

    } catch (error) {
        console.error("Error de conexión:", error);
    }
};