export interface BaseAttrs {}

export default abstract class BaseModel<Attrs extends BaseAttrs> {
    abstract getRawValue(): Attrs;
}