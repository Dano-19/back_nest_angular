import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: async(config: ConfigService)=>{
            const database= new DataSource({
                type:'postgres',
                host:config.get('HOST') || 'localhost',
                port: +config.get('PORT'),
                username: config.get('USERNAME')||'root',
                password: config.get('PASSWORD')||'prueba',
                database: config.get('DATABASE')
            });
            await database.initialize();

            return database
        }  //Configuracion 1 proveedor de BDD
    }
]