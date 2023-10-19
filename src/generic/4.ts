/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Task {
  props: {
    title: string;
  };
}
class Component<Task> {
  constructor(public props) {}
}

class Page extends Component<Task> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
