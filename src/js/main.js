import Title from "./component/title";

let Main =
{
  init()
  {
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded()
  {
    let title = new Title();
    title.update();
  }
};

Main.init();




