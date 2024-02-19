import { useDroppable } from "@dnd-kit/core";

function Droppable(props: { id: number; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
    data: {
      name: "Aula 8",
    },
  });

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
      ref={setNodeRef}
    >
      {props.children}
    </div>
  );
}

export default Droppable;
