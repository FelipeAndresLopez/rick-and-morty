import React from 'react'


const App = React.memo(function () {
  console.log("Render App");

  const [count, setCount] = React.useState(1);
  const [canEdit, setCanEdit] = React.useState(true);

  const countPlusPlus = () => {
    console.log("Click al botón de counter");
    setCount(count + 1);
  };

  const toggleCanEdit = () => {
    console.log("Click al botón de toggleCanEdit");
    setCanEdit(!canEdit);
  };

  return (
    <>
      <button onClick={countPlusPlus}>Counter +1</button>
      <Counter count={count} />

      <button onClick={toggleCanEdit}>Toggle Can Edit</button>
      <Permissions canEdit={canEdit} />
    </>
  );
})

const Permissions = React.memo(function ({ canEdit }) {
  console.log("Render Permissions")

  return (
    <form>
      <p>Can Edit es {canEdit ? "verdadero" : "falso"}</p>
    </form>
  );
})

const Counter = React.memo(function ({ count }) {
  console.log("Render Counter")

  return (
    <form>
      <p>Counter: {count}</p>
    </form>
  );
})
export default App;
