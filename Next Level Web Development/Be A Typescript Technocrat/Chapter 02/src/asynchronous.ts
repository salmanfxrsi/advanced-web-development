{
  // promise

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const todoData = async (): Promise<void> => {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: Todo = await fetchData.json();
    console.log(data);
  };

  todoData();

  const createPromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const data: string = "I want to track google";
      if (data) resolve(data);
      else reject("failed to load data!");
    });
  };

  const showData = async (): Promise<void> => {
    const data = await createPromise();
    console.log(data);
  };

  showData();

  //
}
