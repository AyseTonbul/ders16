import 'bootstrap/dist/css/bootstrap.min.css';
import TodoEklemeFormu from './Components/TodoEklemeFormu'
import TodoListesi from './Components/TodoListesi'
import TodoTamamlananSayisi from './Components/TodoTamamlananSayisi'

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
			<h1>Yapılacaklar Listem</h1>
			<TodoEklemeFormu />
			<TodoListesi/>
			<TodoTamamlananSayisi />
		</div>
  );
}

export default App;

