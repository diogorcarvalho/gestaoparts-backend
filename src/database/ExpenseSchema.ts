import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense extends Document {
    @Prop({ required: true })
    categoryName: string;

    @Prop({ required: true })
    establishmentName: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    createDt: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
