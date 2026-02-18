export const listarTareas = async (urlBase, contenedor) => {
    try {
        const respuesta = await fetch(`${urlBase}/tareas`);
        
        if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");
        
        const tareas = await respuesta.json();
        
        // Verificación en consola (Requerimiento)
        console.log("Datos cargados:", tareas);

        contenedor.innerHTML = '';

        // Renderizamos las primeras 5 tareas
        tareas.slice(0, 5).forEach(tarea => {
            const li = document.createElement('li');
            
            // Asignamos el ID al elemento li como en tu HTML
            li.dataset.id = tarea.id;
            
            // Construimos la estructura interna
            li.innerHTML = `
                <div class="info">
                    <strong>${tarea.nombreTarea}</strong> 
                    ${tarea.descripcion ? `- ${tarea.descripcion}` : ''}
                </div>
                <div class="acciones">
                    <button class="updateBtn">Actualizar</button>
                    <button class="deleteBtn">Eliminar</button>
                    <button class="statusBtn">Estado</button>
                </div>
            `;
            
            contenedor.appendChild(li);
        });

    } catch (error) {
        console.error("Error al listar:", error);
    }
};