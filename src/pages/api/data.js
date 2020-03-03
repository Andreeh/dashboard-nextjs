const fakeData = [
    {
        id: '1',
        name: 'Andrée',
        company: 'Essity'
    },
    {
        id: '2',
        name: 'Showers',
        company: 'Sigma IoT'
    },
    {
        id: '3',
        name: 'The Mair',
        company: 'Sigma IoT'
    }
];

export default (req, res) => {
    setTimeout(() => {
        res.json(fakeData);
    }, 2000);
};
