/*
HTML for the project.

<div class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">FULLNAME HERE</h5>
  </div>
 <small>EMAIL HERE<</small>
</div>
*/

const DATA_URL = '../data/contacts.json'

const getContact = async() =>{
  const response = await fetch(DATA_URL, {mehtod: "GET"})
  const data = await response.json()
    renderContacts(data)
}

const renderContacts = (contactData) =>{
  let contactDisplayElement = document.querySelector('.all-contacts')
  contactDisplayElement.innerHTML = ''
  contactData.map((contact)=>{
    contactDisplayElement.innerHTML += `<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
   <small>${contact.email}</small>
  </div>`
  })
}

getContact()