// import Alert from "./components/Alert";
import Alert from "./components/Alert";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <div>
      <Alert />
      <ListGroup />
      <ExpandableText>
        Bacon ipsum dolor amet frankfurter beef bresaola filet mignon beef ribs
        pork loin tri-tip alcatra shoulder shank venison sirloin tongue
        landjaeger pig. Ground round pork loin porchetta brisket doner shank
        turducken strip steak bacon drumstick flank fatback. Ground round
        andouille tail alcatra ribeye pancetta, flank beef ribs pork belly pork
        cow bacon capicola. Sausage corned beef shankle meatloaf pork loin flank
        pancetta spare ribs pastrami chislic tri-tip. Pancetta biltong meatloaf
        pork belly sirloin, boudin ham hock leberkas prosciutto ribeye. Buffalo
        picanha frankfurter bacon jerky pork.Chicken capicola boudin, meatloaf
        drumstick bacon corned beef sirloin ham. Frankfurter spare ribs shankle
        cow ribeye pork chop. Shank ham hock pastrami boudin strip steak
        drumstick cupim sausage picanha ribeye cow venison salami pork loin
        flank. Doner tri-tip chislic pastrami, salami kielbasa cow capicola
        burgdoggen meatloaf ham ground round. Ball tip bresaola t-bone jowl
        short loin boudin tri-tip leberkas ham hock ground round hamburger strip
        steak pastrami.
      </ExpandableText>
      <Form />
      <Form2 />
      <Form3 />
    </div>
  );
};

export default App;
