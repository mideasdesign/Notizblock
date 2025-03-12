function getNotesTemplate(indexNote) {
  return `
        <details class="p-6 border my-4 border-transparent open:border-black/10 open:bg-gray-100 open:rounded-xl ...">
        <summary class="flex justify-between hover:cursor-pointer text-sm leading-6 font-semibold text-gray-900 select-none">
            <h3 id="note-header" class="text-xl text-gray-600 flex">${notesTitles[indexNote]}</h3>
            </summary>
        <div id="notes-list" class="mt-3 text-sm leading-6 text-gray-600">
            <p>${notes[indexNote]} </p>
            <button id="add-to-trash" class="mt-4 py-1 border-2 border-gray-300 rounded-xl px-2 hover:bg-gray-300" onclick="addToTrash(${indexNote})">in den Papierkorb</button>
            <button id="add-to-archive" class="py-1 border-2 border-gray-300 rounded-xl px-2 hover:bg-gray-300" onclick="addToArchive(${indexNote})">archivieren</button>
        </div>
        </details>`;
}
function getTrashNotesTemplate(indexTrashNote) {
  return `<div class="grid grid-rows-3 sm:grid-cols-3 w-full"> <h3>+ ${notesTitlesTrash[indexTrashNote]}</h3> <p> ${trash[indexTrashNote]}</p> <button class="py-1 border-2 border-gray-300 rounded-xl px-2 hover:cursor-pointer hover:bg-gray-300" onclick="emtyTrash(${indexTrashNote})"> delete </button></div>`;
}
function getArchiveNotesTemplate(indexArchiveNote) {
  return `<div class="grid grid-rows-3 sm:grid-cols-3 w-full"> <h3>+ ${notesTitlesArchive[indexArchiveNote]}</h3> <p> ${notesArchive[indexArchiveNote]}</p> <button class="py-1 border-2 border-gray-300 rounded-xl px-2 hover:cursor-pointer hover:bg-gray-300" onclick="emtyTrash(${indexArchiveNote})"> delete </button></div>`;
}