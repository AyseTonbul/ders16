import TodoElemani from './TodoElemani'

const TodoListesi = () => {
	const todos = [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoElemani id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoListesi;