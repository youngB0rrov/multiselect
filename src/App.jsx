import { useState } from 'react';
import './App.css';

function App() {

  // массив данных, которые помещаются в тегбокс, нужна перменная состояния, чтобы компонент перерендеривался и показывал новый список выбранных элементов
  const [selectedItems, setSelectedItems] = useState([]);

  // массив данных, которые отображаются в списке мультиселкта, прилетает с бэка
  let array = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ];

  // те элементы, что лежат в мультеселекте
  const [items, setItems] = useState([...array]);

  // функция для удаления выбранного элемента из мультиселекта
  const deleteItem = (item, index) => {
    let elements = items?.filter(item => {
      return items?.indexOf(item) !== index
    });
    setItems([...elements]);
    setSelectedItems([...selectedItems, item]);
  }

  // функция для удаления элемента из тегбокса и обратного добавления удаленного элемента в список элементов мультиселекта
  const addItems = (element, index) => {
    // массив всех элементов тегбокса, кроме выбранного
    items?.splice(index, 0, element);
    setItems([...items]);
    let tagboxElements = selectedItems?.filter(item => {
      return selectedItems?.indexOf(item) !== index
    });
    setSelectedItems([...tagboxElements]);
  }

  return (
    <div className="App">
      <div className="container" style={{marginTop: '10%'}}>
        <div className="tags" style={{width: 400, height: 200, border: '1px solid #ddd', marginLeft: 'auto', marginRight: 'auto', padding: 20, borderRadius: 5}}>
          {selectedItems?.map((element, index) => {
            return (
              <span key={index} style={{display: 'inline-block', color: '#fff', backgroundColor: "#ddd", padding: 10, marginLeft: 10, marginBottom: 10, borderRadius: 5}}>
                {element}
                <span
                  onClick={() => {addItems(element, index)}}
                  style={{cursor: 'pointer'}}>
                  &times;
                </span>
              </span>
            )
          })}
        </div>
        <div className="multiselect" style={{display: 'flex', justifyContent: 'center'}}>
          <ul
            style={{width: 100, height: 'auto', marginTop: 30, listStyle: 'none'}}
            multiple
          >
            {items?.map((item, index) => {
              return (
                <li
                  key={index}
                  value={item} 
                  name={item}
                  onClick={() => {deleteItem(item, index)}}
                  style={{cursor: 'pointer', padding: 10, border: '1px solid #ddd', borderRadius: 5, marginTop: 20}}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
