import LargeBookListItem from './components/concepts/lists/books/LargeListItems';
import Modal from './components/concepts/modals/modals';
import { books } from './components/data/books';

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
