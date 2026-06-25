
import { db } from './src/lib/db';

async function test() {
  try {
    console.log('Testing db.account.findFirst...');
    const account = await db.account.findFirst({
      where: { provider: 'github', providerAccountId: 'test' },
      include: { user: true },
    });
    console.log('Result:', account);
  } catch (e) {
    console.error('Error:', e);
    if (e instanceof Error) {
      console.error('Error message:', e.message);
      console.error('Error stack:', e.stack);
    }
  }
}

test();
