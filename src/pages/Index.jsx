// Complete the Index page component here
// Use chakra-ui
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Button as={Link} to="/othello" colorScheme="teal" size="lg">
        Play Othello
      </Button>
    </div>
  );
};

export default Index;