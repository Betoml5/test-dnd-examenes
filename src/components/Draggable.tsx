import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
export function Draggable(props: {
  id: number;
  name: string;
  children: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: {
      name: props.name,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        border: "1px solid black",

        ...style,
      }}
    >
      <p
        style={{
          color: "black",
          padding: "1rem",
        }}
      >
        {props.children}
      </p>
    </div>
  );
}
