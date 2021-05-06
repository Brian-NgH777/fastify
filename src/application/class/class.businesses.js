class ClassBusinesses {
    async findClasses(req) {
        return await req.pg.Class.findAll({});
    }

    async createClass(req) {
        const data = {
            description: "adsdsd",
            name: "aaa"
        };
        
        return await req.pg.Class.create(data)
    }
}



module.exports = new ClassBusinesses();