type DessertListProps = {
    name: string;
    calories: number;
    createdAt: string;
}

function DessertList({data}: {data: DessertListProps[]}){
    const listItems = data.filter(dessert => dessert.calories < 500)
    .sort((a,b) => b.calories - a.calories)
    .map((dessert) => {
        const itemList = `${dessert.name} - ${dessert.calories}`;
        return <li>{itemList}</li>
    } )
    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default DessertList;