let contactList = document.querySelector('#contactList');


/*** Functions ***/
fetch('http://localhost:3000/contacts')
.then(res => res.json())
.then(data => {
    printContacts(data);
});

function printContacts(contacts) {
    // create an empty array
    const seenOfficeCode = [];

    contacts.map(contact => {
        // Check if the office code has already been seen
        if (!seenOfficeCode.includes(contact.officeCode)) {
            // if not, add it to the array seenOfficeCode
            seenOfficeCode.push(contact.officeCode);
        
            let h3 = document.createElement('h3');
            h3.innerText = `${contact.city} | ${contact.phone} | ${contact.addressLine1} | ${contact.addressLine2} | ${contact.postalCode} | ${contact.country} `;
            contactList.appendChild(h3);
        } 

            let li = document.createElement('li');
            li.id = contact.employeeNumber;
            li.innerText = ` ${contact.firstName} ${contact.lastName} | ${contact.email} ${contact.jobTitle}` ;
            contactList.appendChild(li);
    })
}