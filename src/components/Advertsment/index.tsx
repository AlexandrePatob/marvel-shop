import { Container } from "./styles";

interface AdvertsmentProps {
  backgroundColor: string;
}

export function Advertsment({ backgroundColor }: AdvertsmentProps) {
  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <div>
        Advertsment
      </div>
    </Container>
  );
}
