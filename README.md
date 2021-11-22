# enucompi-rest-webhook



### 1. Clonando repositório

- Abra Terminal.
- Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.
- Digite git clone (clonar git) e cole a URL que você copiou anteriormente.

```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```

- Pressione Enter para criar seu clone local.

``` $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Cloning into `Spoon-Knife`...
remote: Contando objetos: 10, concluído.
remote: Compactando objetos: 100% (8/8), concluído.
remove: Total 10 (delta 1), reused 10 (delta 1)
Unpacking objects: 100% (10/10), done.```

## 2. Configurando e iniciando aplicação

1. Instalar `node`
2. Instalar `yarn`
3. Executar `yarn`
4. Criar arquivo `.env`

```
URL_HOSPITAL_ENUCOMPI=<URLGoogleSheet>
PORT=<ServicePort>
BASE_SCHEDULES=<PathSchedules>
BASE_SCHEDULES_ID=<PathSchedulesID>
BASE_APPOINTMENT=<PathSchedulesAppointment>
USER=<UserAPI>
PASSWD = "PasswordApi"

5. Executar `yarn start:<NODE_ENV>`<br><br>```
