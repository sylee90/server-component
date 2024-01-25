import { ModelOptions, Severity, getModelForClass, post, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@post<TodoClass>('save', function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc.id
    }
})

@post<TodoClass[]>(/^find/, function (docs) {
    // @ts-ignore
    if (this.op === 'find') {
        docs.forEach((doc) => {
            doc.id = doc._id.toString();
            doc._id = doc.id
        })
    }
})

@ModelOptions({
    schemaOptions: {
        timestamps: true,
        collection: 'todos'
    },
    options: {
        allowMixed: Severity.ALLOW,
    }
})

class TodoClass {
    @prop({ required: true })
    public content: string;

    @prop({ default: false })
    public task_done: boolean;

    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Todo = getModelForClass(TodoClass);

export { Todo, TodoClass }