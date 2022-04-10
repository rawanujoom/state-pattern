'use strict';

import { TypedQueryDocumentNode } from 'graphql';
import { Model as MongooseModel, Document } from 'mongoose';

export default class Model {
    model;
    /**
     * Model Constructor
     * @param {Object} schema - mongo schema
     */
    constructor(model: MongooseModel<Document>) {
        this.model = model;
    }

    /**
     *
     * @param {String} _id optional record id
     * @return {*}
     */
    get(_id?: string): any {
        if (_id) {
           return this.model.findById(_id);
        }
        return  this.model.find({});
    }

    getByProperty(property: Object): any {
        return this.model.find({state: 'Draft'});
    }
    /**
     *
     * @param {object} record matches the schema format
     * @return {*}
     */
    post(record: object): any {
        let newRecord = new this.model(record);
        return newRecord.save();
    }

    /**
     *
     * @param {string} _id mongo record id
     * @param {object} record shcema object format
     * @return {*}
     */
    update(_id: string, record: object): any {
        return this.model.findByIdAndUpdate(_id, record, {new: true});
    }

    /**
     * @param {string} _id
     * @return {*}
     */
    delete(_id: string): any {
        // return promise
        return this.model.findByIdAndDelete(_id);
    }
}
