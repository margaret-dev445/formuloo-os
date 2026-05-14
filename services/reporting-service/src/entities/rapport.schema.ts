import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';  
import { Document } from 'mongoose';  
  
@Schema({ timestamps: true })  
export class Rapport extends Document {  
  
  @Prop({ required: true })  
  title: string;  
  
  @Prop({ required: true })  
  type: string;  
  
  @Prop({ required: true })  
  periodStart: string;  
  
  @Prop({ required: true })  
  periodEnd: string;  
  
  @Prop({ required: true })  
  service: string;  
}  
  
export const RapportSchema = SchemaFactory.createForClass(Rapport);