#ifndef DATA_H
#define DATA_H
#ifndef POOL_DATA_LENGHT
#define POOL_DATA_LENGHT 100
#endif

#include <queue>

namespace sword
{

    class data
    {
    private:
        int i=0;
    public:
        data(int i);
        data();
        ~data();
        const char * readable_out();
    };
    extern std::queue<data> dataPool;
    extern char * buffer;
    char * serializePool(bool clear=0);
    void clean();

}

#endif