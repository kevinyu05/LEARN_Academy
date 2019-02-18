import DropdownMultiple from './components/DropdownMultiple';
import Dropdown from './components/Dropdown';

class Dropdown extends Component {


     player: [
       {
         id: 0,
         title: 'X',
         selected: false,
         key: 'emoji'
       },
       {
         id: 1,
         title: 'O',
         selected: false,
         key: 'emoji'
       },
       {
         id: 2,
         title: '😂',
         selected: false,
         key: 'emoji'
       },
       {
         id: 3,
         title: '😎',
         selected: false,
         key: 'emoji'
       },
       {
         id: 4,
         title: '🤔',
         selected: false,
         key: 'emoji'
       }
     ]
   }
 }

 toggleSelected = (id, key) => {
   let temp = JSON.parse(JSON.stringify(this.state[key]))
   temp[id].selected = !temp[id].selected
   this.setState({
     [key]: temp
   })
 }

 resetThenSet = (id, key) => {
   let temp = JSON.parse(JSON.stringify(this.state[key]))
   temp.forEach(item => item.selected = false);
   temp[id].selected = true;
   this.setState({
     [key]: temp
   })
 }

 render() {
   return (
     <div className="App">
       <p>Dropdown menu examples</p>

       <div className="wrapper">

         <Dropdown
           title="Select Emoji"
           list={this.state.emoji}
           resetThenSet={this.resetThenSet}
           toggleItem={this.toggleSelected}
         />
       </div>
     </div>
   );
 }
}

export default Dropdown;
