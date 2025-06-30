export interface ItemStatus {
  name: string;
  nextStatus(): void;
}
