// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }


const filterByExpiration = (items) => {

    items = items.filter(item => new Date(item.expirationDate) > new Date());

    return items;
};