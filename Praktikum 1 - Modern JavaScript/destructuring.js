let polStudent = ({ name, polytechnic }) => {
    alert(`${name} from ${polytechnic}`);
}

// test
polStudent({
    name: 'Ronaldo',
    polytechnic: 'Politeknik Negeri Malang'
});

polStudent({
    name: 'Dani',
    polytechnic: 'ITS'
})