import 'dotenv/config';
import { SerialPort, ReadlineParser } from 'serialport';
import { ConfigService } from './services/config.service';
import messageService from './services/message.service';

const port = new SerialPort({ path: 'COM3', baudRate: 9600});
const configService = new ConfigService(port);

port.on("open", () => {
  console.log('serial port open');
  setTimeout(() => {
    setInterval(
      configService.updateLightOffIn.bind(configService),
      Number(process.env.CONFIG_UPDATE_INTERVAL ?? 1000)
    )

    const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
    parser.on('data', data =>{
      try{
        messageService.sendMessage(JSON.parse(data)).catch(console.error);
      }catch (e) {
        console.error(e.message, typeof e, data);
      }
    });
  }, 2000);
});
