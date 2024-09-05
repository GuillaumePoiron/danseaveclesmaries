import { Button } from "@chakra-ui/react";

export default function Votants() {
  const votes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleVote = (vote: number) => {
    console.log("Voted for", vote);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {votes.map((vote, index) => (
          <Button key={index} size="lg" colorScheme="blackAlpha">
            {vote}
          </Button>
        ))}
      </div>
    </div>
  );
}
