import LargeAuthorListItem from './authors/LargeListItems';
import SmallAuthorListItem from './authors/SmallListItems';
import LargeBookListItem from './books/LargeListItems';
import SmallBoolListItem from './books/SmallListItems';
import RegularList from './list/Regular';
import NumberedList from './list/Numbered';
import { authors } from '../data/authors';
import { books } from '../data/books';

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBoolListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
