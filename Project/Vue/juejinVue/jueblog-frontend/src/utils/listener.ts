type EventHandler = (args: unknown) => void

export class Listener {
  private emitter: Record<string, EventHandler[]> = {}
  apply(event: string, fun: (...args: unknown[]) => void) {
    if (!this.emitter[event]) {
      this.emitter[event] = []
    }
    this.emitter[event].push(fun)
  }

  emit(event: string, args?: unknown) {
    if (this.emitter[event]) {
      this.emitter[event].forEach(fun => fun(args))
    }
  }
}
