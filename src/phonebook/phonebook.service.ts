import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phonebook } from './phonebook-model-shema';

@Injectable()
export class PhonebookService {
  constructor(
    @InjectModel('Phonebook')
    private readonly __phonebookModel: Model<Phonebook>,
  ) {}

  async addNewPhonebookToTheDatabase(phonebook: any) {
    const book = new this.__phonebookModel(phonebook);
    return await book.save();

    // return 'Adding Phone Book...';
  }

  async getAllPhonebooksFromTheDatabase() {
    return await this.__phonebookModel.find();
    // return 'Getting All Phone Books...';
  }

  async getOnePhonebookFromTheDatabase(phonebookId: string) {
    return await this.__phonebookModel.findById(phonebookId);
    // return 'Getting One Phone Book...';
  }

  async updateOnePhonebookFromTheDatabase(phonebookId: string, phonebook: any) {
    //   phonebookId: string,
    //   name: string,
    //   phone: number,
    // ) {
    //   const updatedProduct = await this.findProduct(contactId);
    //   if (name) {
    //     updateOnePhonebook.name = name;
    //   }
    //   if (phone) {
    //       updateOnePhonebook.phone = phone;
    //   }
    //   updateOnePhonebook.save();
    // return 'Updating One Phone Book...';
  }

  async deleteOnePhonebookFromTheDatabase(phonebookId: string) {
    return await this.__phonebookModel.findByIdAndRemove(phonebookId);
    // return 'Deleting One Phone Book...';
  }

  // searchPhonebookByNameOrNumber(options: any) {
  //   // return 'Searching Phone Book...';
  // }
}
