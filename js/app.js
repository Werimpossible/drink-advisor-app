//Mandar elementos HTML al Js
var $inputSearcher = $("#bar-seacher");


//Metodo cargar jQuery
$(document).ready(loadPage);

//Aqui meteras modales y searcher del filtro
function loadPage() {
    $nameInput.keyup(validateContact);
    $phoneInput.keyup(validateContact);
    $("#searcher").keyup(filterContacts);
}

//Este nos funciona para cuando el usuario agregue el valor
var name = $nameInput.val();
var phone = $phoneInput.val();
$("#modal1").modal("close");

//Este bloque debes de personalizarlo dependiendo de como hagas tu container de bares

function paintContactsInHtml(contact) {
    //crear elementos con DOM
    var $newContact = $("<article />", {
        "class": "card-panel hoverable"
    });
    var $containerContactName = $("<h4 />");
    var $deleteContactButton = $("<button type='button' />");
    var $removeIcono = $("<i />", {
        "class": "material-icons"
    });
    var $containerContactPhone = $("<p />");

    //Agregamos atributos y eventos a los elementos creados en el dom
    $deleteContactButton.addClass("btn right");
    $removeIcono.text("delete");
    $deleteContactButton.click(removeContact);

    //Asignando valores
    $deleteContactButton.append($removeIcono);
    $containerContactName.text(contact.name);
    $containerContactPhone.text(contact.phone);

    $newContact.append($containerContactName);
    $newContact.append($deleteContactButton);
    $newContact.append($containerContactPhone);



    //agregamos lo que creamos con el Dom a un elemento existente del html

    function filterContacts() {
        var searchContact = $("#searcher").val().toLowerCase();
        if ($("#searcher").val().trim().length > 0) {
            var filteredContacts = contacts.filter(function (contact) {
                return contact.name.toLowerCase().indexOf(searchContact) >= 0;
            });
            $("#publish-contacts").empty();
            filteredContacts.forEach(function (contact) {
                paintContactsInHtml(contact);
            });
        } else {
            $("#publish-contacts").empty();
            contacts.forEach(function (contact) {
                paintContactsInHtml(contact);
            });
            }