const root = ReactDOM.createRoot(document.getElementById("root"));

//Классовый компонент Student55FS

class Student55FS extends React.Component { 
    render() {
        return(
            <>
            <h1 style ={{ textAlign: "center", backgroundColor: "lightgray", color: "blue" }}>Welcome to React!</h1>
            <p className = "text-center">This is a class component</p>
            </>
        );
     }
}

//Отображаем компонент
root.render(
    <>

    <Student55FS />
    <Student55FS />
    <Student55FS />
    </>
);